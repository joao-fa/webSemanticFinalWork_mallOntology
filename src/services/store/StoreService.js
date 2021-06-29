import ServerApi from "../api/ServerApi";

const BASE_API_PATH = "/api/stores";

class StoreService {

  findAllStores() {
    return ServerApi.get(BASE_API_PATH + "/all");
  }

  findAllStoresOrderByName() {
    return ServerApi.get(BASE_API_PATH + "/all-ordered");
  }

  findStoreByName(storeName) {
    return ServerApi.get(BASE_API_PATH + "/by-name", {
      params: {
        storeName
      }
    });
  }

  findAllStoresByCategory(category) {
    return ServerApi.get(BASE_API_PATH + "/all-by-category", {
      params: {
        category
      }
    });
  }
}

export default new StoreService();
