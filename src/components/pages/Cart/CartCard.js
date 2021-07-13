import React from 'react'
import './CartCard.css'

function CartCard(props) {
  var products = JSON.parse(localStorage.getItem("products"));

    return (
      <div className="cart-card-container">
        <div className={"cart-card-name"}>
          {props.name}
        </div>
  
        <div className={"cart-card-information"}>
          <p>Informações</p>
          <p>Preço: {props.price}</p>
        </div>
        <div className={"cart-delete-product"}>
        <button className={"cart-delete-product-button"} onClick={()=> {
          products = products.filter(x => x.name !== props.name);
          localStorage.setItem("products", JSON.stringify(products));
          window.location.reload();
          }}>Remover do Carrinho</button>
        </div>
      </div>
    );
  }
  
  export default CartCard;