import makeRequest from "../services/makeRequest";
import {IHomeApi} from "../types/apiTypes";
import {TUsers} from "../types/reducerTypes/home";



const homeApi: IHomeApi = {
    getAllStudents(){
        return makeRequest<"get">({url: "users", method: "get"})
    },
    // getOneStudent(id){
    //    return makeRequest<"get">({url: "users/"+id, method: "get"})
    // },
    addStudent(body){
        return makeRequest<"post">({url: "users", method: "post", body})
    },
    // deleteStudent(id){
    //     return makeRequest<"delete">({url: "users/"+id, method: "delete"})
    // }
}


export default homeApi
