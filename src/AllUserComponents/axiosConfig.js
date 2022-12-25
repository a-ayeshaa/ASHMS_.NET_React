import axios from "axios";
import { json } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://localhost:44361/api",
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("_authToken");
    // console.log("authorized");
    // config.mode = "no-cors";
    // config.crossorigin = true;
    // config.headers.Content-Type="application/json";
    // config.credentials=false;
    debugger;
    return config;
  },
  (err) => {
    debugger;
  }
);

instance.interceptors.response.use(
  (rsp) => {
    debugger;
    return rsp;
  },
  (err) => {
    debugger;
    if (err.response.status === 401) {
      debugger;
      window.location.href = "/login";
    }
    debugger;
    return Promise.reject(err);
  }
);
export default instance;
