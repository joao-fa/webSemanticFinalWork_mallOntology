import React from 'react'
import './ProductCard.css'

function ProductCard(props) {

  const addProduct = () => {
    const productList = props.productList;
    productList.push({name:props.name, price:props.price})
    localStorage.setItem("products", JSON.stringify(productList));
  }

  return (
    <div className="product-card-container">
      <div className={"product-card-name"}>
        {props.name}
      </div>

      <div className={"product-card-information"}>
        <p>Informações</p>
        <p>Descrição: {props.description}</p>
        <p>Loja: {props.storeName}</p>
        <p>Preço: {props.price}</p>
        <p>Quantidade: {props.stock}</p>
      </div>
      <div className={"product-add-cart"}>
        <button className={"product-add-cart-button"}  onClick={addProduct}>
        Adicionar Produto ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;