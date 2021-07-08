import React from 'react'
import './Product.css'
import useProduct from "./productLogic";
import ProductCard from "./ProductCard";

function Product() {
  const [{searchType, identifier, products}, search, handleIdentifierChange, handleSearchTypeChange] = useProduct();

  function showProduct(product) {
    return <ProductCard name={product.name} price={product.price} description={product.description} stock={product.stock} storeName={product.storeName}/>
  }

  return (
    <div className="filter-container">
      <div>
        <h2>Buscar por produtos</h2>
      </div>

      <div className="filter-box">
        <div className="radio-options">
          <div>
            <input type="radio" value="BY_CATEGORY" name="productSearchType" checked={searchType === 'BY_CATEGORY'}
                   onChange={handleSearchTypeChange}/> Por categoria
          </div>
          <div>
            <input type="radio" value="BY_STORE" name="productSearchType" checked={searchType === 'BY_STORE'}
                   onChange={handleSearchTypeChange}/> Por loja
          </div>
          <div>
            <input type="radio" value="ALL" checked={searchType === 'ALL'}
                   onChange={handleSearchTypeChange}/> Exibir todos
          </div>
        </div>

        <div className="search-box">
          <div>
            <input type="text" value={identifier} autoComplete="off" onChange={handleIdentifierChange}
                   disabled={searchType === 'ALL'}
                   placeholder={(searchType === 'BY_CATEGORY' || searchType === 'BY_STORE') ? 'Digite aqui' : ''}/>
          </div>

          <div>
            <button type="button" className="search-button" onClick={search}>Buscar</button>
          </div>
        </div>
      </div>

      <div className="products-container">
        {products.map(showProduct)}
      </div>
    </div>
  );
}

export default Product;