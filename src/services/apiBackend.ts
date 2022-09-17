
import axios from "axios";

const apiAxios = axios.create({
  baseURL: 'http://10.0.0.189:3333/'
})

export default apiAxios;