import axios, {Method} from "axios";
import makeRequest from "../../services/makeRequest";

export const instance = () => axios.create({
    baseURL: "http://localhost:3999/",
})

