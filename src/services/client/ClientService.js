import ServerApi from "../api/ServerApi";

const BASE_API_PATH = "/api/clients";

class ClientService {

  login(email, password) {
    return ServerApi.get(BASE_API_PATH + "/login", {
      params: {
        email,
        password
      }
    });
  }
}

export default new ClientService();
