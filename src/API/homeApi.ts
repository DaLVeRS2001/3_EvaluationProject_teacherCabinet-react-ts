import makeRequest from "../services/makeRequest";
import {IHomeApi} from "../types/apiTypes";
import {TUsers} from "../types/reducerTypes/home";



const homeApi: IHomeApi = {
    getAllStudents(){
        return makeRequest<"get">({url: "users", httpType: "get"})
    },
    // getOneStudent(id){
    //    return makeRequest<"get">({url: "users/"+id, httpType: "get"})
    // },
    // addStudent(body){
    //     return makeRequest<"post">({url: "users", httpType: "post", body})
    // },
    // deleteStudent(id){
    //     return makeRequest<"delete">({url: "users/"+id, httpType: "delete"})
    // }
}


export default homeApi
