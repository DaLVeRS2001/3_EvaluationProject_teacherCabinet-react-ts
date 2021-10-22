import {instance} from "../API/instance";
import {CorrectRequest} from "../types/utility";
import {TMakeRequestDefaultArgs} from "../types/apiTypes";


const makeRequest = <T>(arg: CorrectRequest<T>): Promise<any> => {
   const {url, method, body}: TMakeRequestDefaultArgs = {...arg}

   return instance().request({url, method, data: {...body}})
       .then((data) => data.data)
       .catch((err) => console.log(err))
}


export default makeRequest