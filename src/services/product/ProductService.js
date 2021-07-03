import ServerApi from "../api/ServerApi";

const BASE_API_PATH = "/api/products";

class ProductService {

  /*
  searchType: modo de pesquisa, podendo assumir os seguintes valores:
     -> ALL          (busca por todos os produtos)
     -> BY_CATEGORY  (busca por todos os produtos de uma categoria)
     -> BY_STORE     (busca por todos os produtos de uma loja)

  identifier: valor digitado pelo usuário
     -> No modo ALL,          mandar qualquer valor no identifier
     -> No modo BY_CATEGORY,  mandar a categoria pesquisada pelo usuário
     -> No modo BY_STORE,     mandar o nome da loja pesquisado pelo usuário

 */

  findByIdentifier(identifier, searchType) {
    return ServerApi.get(BASE_API_PATH, {
      params: {
        identifier,
        searchType
      }
    })
  }

  findAllUserPreferences(email) {
    return ServerApi.get(BASE_API_PATH + "/user-preferences", {
      params: {
        email
      }
    });
  }
}

export default new ProductService();
