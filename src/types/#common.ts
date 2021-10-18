import {Dispatch} from "redux";
import {HomeActions} from "./reducerTypes/home";
import {AppActions} from "./reducerTypes/app";



//REDUX
type AllActions = HomeActions | AppActions
export type  TDefaultAC = (...arg: any) => (dispatch: Dispatch<AllActions>) => void


