//ALIASES
export type TLessonDates = { date: string, studentName: string, timeStart: string, timeFinish: string}[]

//RootState
export interface IScheduleState{
    lessonDates: TLessonDates,
    currentDate: Date
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
    payload: Date
}

//RootActionsType
export type ScheduleActions =  ILessonDatesAction | ICurrentDateAction

//CONNECT STATES
export interface IScheduleConnectState{
    lessonDates: TLessonDates,
    currentDate: Date
}













