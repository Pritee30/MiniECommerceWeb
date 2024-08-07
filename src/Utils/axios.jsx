import axios from "axios";

const instance = axios.create({
    method: 'get',
    baseURL: "https://fakestoreapi.com/",
});

export default instance;