import {Method} from "axios";

type _ParsedNull<T> = {[K in keyof T]: T[K] extends  null | undefined ? never : K}[keyof T]
export type ObjNonNullable<T> = {
    [K in _ParsedNull<T>]: T[K]
}



export type CorrectRequest<T> = T extends "post" | "put" ? {url: string, httpType: Method , body: any}
    :  (T extends "get" | "delete" ?  {url: string, httpType: Method}
    : never)