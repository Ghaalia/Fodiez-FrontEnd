import axios from "axios";
const BASEURL = "http://localhost:8000/";
const instance = axios.create({
  baseURL: "http://localhost:8000/",
});

export { BASEURL };
export default instance;
