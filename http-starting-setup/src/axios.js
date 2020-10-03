import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FRROM INSTANCE";

//instance.interceptors.request.use(request)
export default instance;
