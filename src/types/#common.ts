import {Dispatch} from "redux";
import {HomeActions} from "./reducerTypes/home";
import {AppActions} from "./reducerTypes/app";
import {ScheduleActions} from "./reducerTypes/schedule";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

//SERVICES

export type TDateShortcut = (
    date: Date, locale?: string | 'default' | 'ru' | 'en', options?: DateTimeFormatOptions
) => string

//REDUX
type AllActions = HomeActions | AppActions | ScheduleActions
export type  TDefaultAC = (...arg: any) => (dispatch: Dispatch<AllActions>) => void


