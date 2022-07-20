import axios from 'axios'; //1.

let BOARD_API_BASE_URL = "/api/user";

class UserService{
  logIn(user){
    return axios.post(BOARD_API_BASE_URL+"/logIn", user);
  }
  register(user){
    return axios.post(BOARD_API_BASE_URL+"/register", user);
  }
  confirm(user){
    return axios.post(BOARD_API_BASE_URL+"/confirm", user);
  }
  update(user){
    return axios.post(BOARD_API_BASE_URL+"/update", user);
  }
  delete(user){
    return axios.post(BOARD_API_BASE_URL+"/delete", user);
  }
  selectOne(user){
    return axios.post(BOARD_API_BASE_URL+"/selectOne", user);
  }
}
export default new UserService();