//ALIASES
export type TLessonDates = { date: string, studentName: string, timeStart: string, timeFinish: string}[]

//RootState
export interface IScheduleState{
    lessonDates: TLessonDates
}

//ENUMS
export enum ScheduleActionTypes{
    LESSON_DATES = 'LESSON_DATES'
}

//ACTIONS
interface ILessonDatesAction{
    type: ScheduleActionTypes.LESSON_DATES,
    payload: TLessonDates
}

//RootActionsType
export type ScheduleActions =  ILessonDatesAction

//CONNECT STATES
export interface IScheduleConnectState{
    lessonDates: TLessonDates
}













