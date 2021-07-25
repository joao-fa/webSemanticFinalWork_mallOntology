import React from 'react'
import './Cart.css'
import CartCard from "./CartCard";
import ClientService from "../../../services/client/ClientService";

function Cart() {
  const products = JSON.parse(localStorage.getItem("products"));
  const currentUser = ClientService.getCurrentUser()
  var isEnabled = false;

  function priceTotal() {
    var total = 0;
    if (products != null) products.forEach(element => {total += element.price;});

    return "Preço Total: R$"+total;
  }

  function showProductInCart(){
      if (products == null || products.length === 0) {
        return <h3>Carrinho está vazio</h3>
      }
      else {
        isEnabled = true
        return products.map(showProduct)
      }
  }

  function finishBuyout(){
    localStorage.removeItem("products");
    window.location.reload();
  }

  function showProduct(product) {
    return <CartCard name={product.name} price={product.price} description={product.description} stock={product.stock} storeName={product.storeName} />
  }

  return (
    <div className="filter-container">
      <div>
        <h2>Carrinho</h2>
      </div>

      <div className="cart-container">
        {showProductInCart()}
      </div>
      {isEnabled && 
      <div className="finalize-box">
        <h3>{priceTotal()}</h3>
        <div className="cart-finalize">
          {(currentUser != undefined || currentUser != null) && (
            <button className="cart-finalize-button" onClick={finishBuyout}>Finalizar Compra</button>
          )}
          {(currentUser == undefined || currentUser == null) && (
            <span className="not-logged">
              Não logado
            </span>
          )}
        </div>
      </div>}
    </div>
  );
}

export default Cart;