import "./Map.css";
import React from 'react'
import useMap from './MapLogic'
import ProductCard from '../products/ProductCard'

function Map() {

    const [{stores, storeName, preferences}, handleStoreNameChange] = useMap();
    function renderProduct(product) {
        return <ProductCard key={product.name} name={product.name} price={product.price} description={product.description} stock={product.stock} storeName={product.storeName}/>
    }

    return (
        <div className={'map-container'}>
            <div className={'map-select'}>
                <span> Selecione sua Loja: </span>
                <select onChange={handleStoreNameChange}>
                    {stores.map(element=>(
                        <option key={element.name} defaultValue={storeName}>
                            {element.name}
                        </option>
                    ))}
                </select>    
            </div>
            <div className={'map-image-container'}>
                <p> Este é o caminho para a {storeName} </p>
                {storeName === 'Apple' && (
                    <img src={process.env.PUBLIC_URL + '/images/img-1.jpg'} width={500} height={300} alt={'mapa_da_Apple'}/>
                )}
                {storeName === 'Boticário' && (
                    <img src={process.env.PUBLIC_URL + '/images/img-2.jpg'} width={500} height={300} alt={'mapa_da_Boticário'}/>
                )}
                {storeName === 'C&A' && (
                    <img src={process.env.PUBLIC_URL + '/images/img-3.jpg'} width={500} height={300} alt={'mapa_da_C&A'}/>
                )}
                {storeName === 'Renner' && (
                    <img src={process.env.PUBLIC_URL + '/images/img-4.jpg'} width={500} height={300} alt={'mapa_da_Renner'}/>
                )}
                {storeName === 'Saraiva' && (
                    <img src={process.env.PUBLIC_URL + '/images/img-5.jpg'} width={500} height={300} alt={'mapa_da_Saraiva'}/>
                )}
            </div>
            <div className={'map-preferences-container'}>
                <p> Mais produtos para você! </p>
                <div className={'map-preferences'}>
                    {preferences.map(renderProduct)}
                </div>
            </div>   
        </div>  
    )
}

export default Map;
