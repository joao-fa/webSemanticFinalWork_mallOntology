import ServerApi from "../api/ServerApi";

const BASE_API_PATH = "/api/products";

class ProductService {

  findAllAvailableProducts() {
    return ServerApi.get(BASE_API_PATH + "/all");
  }

  findAllAvailableProductsByCategory(category) {
    return ServerApi.get(BASE_API_PATH + "/all-by-category", {
      params: {
        category
      }
    });
  }

  findAllAvailableProductsByStore(storeName) {
    return ServerApi.get(BASE_API_PATH + "/all-by-store", {
      params: {
        storeName
      }
    });
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
