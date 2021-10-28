import {Method} from "axios";
import {TUser, TUsers} from "./reducerTypes/home";
import {TLessonDates} from "./reducerTypes/schedule";


//COMMON
export type TMakeRequestDefaultArgs = {url: string, method: Method , body?: any}


//HOME
type IdType = number | string

export interface IHomeApi {
    getAllStudents: () => Promise<TUsers>
    // getOneStudent: (id: IdType) => Promise<void>
    addStudent: (body: TUser) => Promise<TUser>
    // deleteStudent: (id: IdType) => Promise<void>
}

//SCHEDULE
export interface IScheduleApi {
    getAllLessonDates: () => Promise<TLessonDates>
}