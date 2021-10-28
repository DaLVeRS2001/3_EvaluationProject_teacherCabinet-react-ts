import {Dispatch} from "redux";
import {TDefaultAC} from "../../types/#common";
import {ScheduleActions, ScheduleActionTypes} from "../../types/reducerTypes/schedule";
import scheduleApi from "../../API/instance/scheduleApi";

export const getLessonDates: TDefaultAC = () => (dispatch: Dispatch<ScheduleActions>):void => {
        scheduleApi.getAllLessonDates()
            .then((lessonDates)=> dispatch({type: ScheduleActionTypes.LESSON_DATES, payload: lessonDates}))
    }
