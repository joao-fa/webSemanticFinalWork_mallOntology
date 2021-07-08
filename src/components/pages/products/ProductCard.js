import React from 'react'
import './ProductCard.css'

function ProductCard(props) {

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
    </div>
  );
}

export default ProductCard;