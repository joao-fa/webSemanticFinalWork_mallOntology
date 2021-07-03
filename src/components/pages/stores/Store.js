import React from 'react'
import './Store.css'
import useStore from "./storeLogic";

function Store() {
  const [{searchType, identifier, loading, stores}, search, handleIdentifierChange, handleSearchTypeChange] = useStore();

  function showStore(store) {
    return <div>
      <p>Nome: {store.name}</p>
      <p>Site: {store.site}</p>
      <p>Corredor: {store.hall}</p>
      <p>Posição: {store.position}</p>
      <br/>
    </div>
  }

  return (
    <div className="filter-container">
      <div>
        <h2>Buscar por lojas</h2>
      </div>

      <div className="filter-box">
        <div className="radio-options">
          <div>
            <input type="radio" value="BY_NAME" name="storeSearchType" checked={searchType === 'BY_NAME'}
                   onChange={handleSearchTypeChange}/> Por nome
          </div>
          <div>
            <input type="radio" value="BY_CATEGORY" name="storeSearchType" checked={searchType === 'BY_CATEGORY'}
                   onChange={handleSearchTypeChange}/> Por categoria
          </div>
          <div>
            <input type="radio" value="ALL" checked={searchType === 'ALL'}
                   onChange={handleSearchTypeChange}/> Exibir todas
          </div>
          <div>
            <input type="radio" value="ALL_ORDERED" name="storeSearchType" checked={searchType === 'ALL_ORDERED'}
                   onChange={handleSearchTypeChange}/> Exibir todas ordenadamente
          </div>
        </div>

        <div className="search-box">
          <div>
            <input type="text" value={identifier} autoComplete="off" onChange={handleIdentifierChange}
                   disabled={searchType === 'ALL' || searchType === 'ALL_ORDERED'}
                   placeholder={(searchType === 'BY_NAME' || searchType === 'BY_CATEGORY') ? 'Digite aqui' : ''}/>
          </div>

          <div>
            <button type="button" className="search-button" onClick={search}>Buscar</button>
          </div>
        </div>
      </div>

      <div>
        {stores.map(showStore)}
      </div>
    </div>
  );
}

export default Store;
