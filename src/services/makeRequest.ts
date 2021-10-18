import {instance} from "../API/instance";
import {CorrectRequest} from "../types/utility";
import {TMakeRequestDefaultArgs} from "../types/apiTypes";
import {AxiosError, AxiosResponse} from "axios";



const makeRequest = <T>  (arg: CorrectRequest<T>):Promise<any> => {
   const defaultArgs: TMakeRequestDefaultArgs = {...arg}

   return instance(defaultArgs.httpType)(defaultArgs.url, defaultArgs.body)
       .then((data) => data.data)
       .catch((err) => console.log(err))
}


export default makeRequest