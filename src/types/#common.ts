import {Dispatch} from "redux";
import {HomeActions} from "./reducerTypes/home";
import {AppActions} from "./reducerTypes/app";
import {ScheduleActions} from "./reducerTypes/schedule";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

//TRASH
export type TColors = `#${string}`[]


//SERVICES
export type TDateShortcut = (
    date: Date, locale?: string | 'default' | 'ru' | 'en', options?: DateTimeFormatOptions
) => string

export type TGetRandomColor = (colors: string[]) => string | never


//REDUX
type AllActions = HomeActions | AppActions | ScheduleActions
export type  TDefaultAC = (...arg: any) => (dispatch: Dispatch<AllActions>) => void


