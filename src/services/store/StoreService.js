import ServerApi from "../api/ServerApi";

const BASE_API_PATH = "/api/stores";

class StoreService {

  /*
  searchType: modo de pesquisa, podendo assumir os seguintes valores:
     -> ALL          (busca por todas as lojas)
     -> ALL_ORDERED  (busca por todas as lojas de forma ordenada)
     -> BY_NAME      (busca por uma loja pelo nome)
     -> BY_CATEGORY  (busca por todas as lojas de uma categoria)

  identifier: valor digitado pelo usuário
     -> No modo ALL,          mandar qualquer valor no identifier
     -> No modo ALL_ORDERED,  mandar qualquer valor no identifier
     -> No modo BY_NAME,      mandar o nome pesquisado pelo usuário
     -> No modo BY_CATEGORY,  mandar a categoria pesquisada pelo usuário
   */

  findByIdentifier(identifier, searchType) {
    return ServerApi.get(BASE_API_PATH, {
      params: {
        identifier,
        searchType
      }
    })
  }
}

export default new StoreService();
