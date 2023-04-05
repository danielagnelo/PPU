import axios from "axios";

const api = axios.create({
  //baseURL: 'http://localhost:3001/'
  baseURL: 'http://10.30.152.21:8080/'
});
export default api;