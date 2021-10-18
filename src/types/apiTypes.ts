import {Method} from "axios";
import {TUsers} from "./reducerTypes/home";


//COMMON
export type TMakeRequestDefaultArgs = {url: string, httpType: Method , body?: any}


//HOME
type IdType = number | string

export interface IHomeApi {
    getAllStudents: () => Promise<TUsers>
    // getOneStudent: (id: IdType) => Promise<void>
    // addStudent: (body: any) => Promise<void>
    // deleteStudent: (id: IdType) => Promise<void>
}