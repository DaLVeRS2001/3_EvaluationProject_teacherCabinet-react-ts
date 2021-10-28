import {Dispatch} from "redux";
import {HomeActions} from "./reducerTypes/home";
import {AppActions} from "./reducerTypes/app";
import {ScheduleActions} from "./reducerTypes/schedule";



//REDUX
type AllActions = HomeActions | AppActions | ScheduleActions
export type  TDefaultAC = (...arg: any) => (dispatch: Dispatch<AllActions>) => void


