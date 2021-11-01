//ALIASES
export type TLessonDates = { date: string, studentName: string, timeStart: string, timeFinish: string}[]
export type TLessonDate = { date: string, studentName: string, timeStart: string, timeFinish: string}
export type TCurrentDate = { nowDate: Date, pastDate: Date }

//RootState
export interface IScheduleState{
    lessonDates: TLessonDates
    currentDate: TCurrentDate
}

//ENUMS
export enum ScheduleActionTypes{
    LESSON_DATES = 'LESSON_DATES',
    CURRENT_DATE = 'CURRENT_DATE'
}

//ACTIONS
interface ILessonDatesAction{
    type: ScheduleActionTypes.LESSON_DATES,
    payload: TLessonDates
}
interface ICurrentDateAction{
    type: ScheduleActionTypes.CURRENT_DATE,
    payload:  TCurrentDate
}

//RootActionsType
export type ScheduleActions =  ILessonDatesAction | ICurrentDateAction

//CONNECT STATES
export interface IScheduleConnectState{
    lessonDates: TLessonDates,
    currentDate: TCurrentDate
}













