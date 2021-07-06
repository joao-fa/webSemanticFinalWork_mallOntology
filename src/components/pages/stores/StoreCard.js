import React from 'react'
import './StoreCard.css'

function StoreCard(props) {

  return (
    <div className="store-card-container">
      <div className={"store-card-name"}>
        {props.name}
      </div>

      <div className={"store-card-localization"}>
        <p>Localização</p>
        <p>Corredor: {props.hall}</p>
        <p>Posição: {props.position}</p>
      </div>

      <div className={"store-card-link"}>
        <a href={props.site}>Acessar site</a>
      </div>
    </div>
  );
}

export default StoreCard;
