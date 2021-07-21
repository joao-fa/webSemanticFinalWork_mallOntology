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

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new ClientService();
