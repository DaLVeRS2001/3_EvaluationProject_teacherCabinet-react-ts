import axios, {Method} from "axios";
import makeRequest from "../../services/makeRequest";

export const instance = (httpType: Method) => axios.create({
    baseURL: "http://localhost:3999/",
    method: httpType
})

