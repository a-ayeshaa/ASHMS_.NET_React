import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:44361/api'
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization= localStorage.getItem("_authToken");
    // console.log("authorized");
    debugger;
    return config;
}, (err) => {
    debugger;
});

instance.interceptors.response.use((rsp) => {
    debugger;
    return rsp;
}, (err) => {
    debugger;
    if (err.response.status === 401) {
        debugger;
        window.location.href = "/login";
    }
    debugger
    return Promise.reject(err);
});
export default instance;