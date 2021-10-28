import {IScheduleState, ScheduleActions, ScheduleActionTypes} from "../../types/reducerTypes/schedule";

const initialState: IScheduleState = {
    lessonDates: []
}

const scheduleReducer = (state = initialState, action: ScheduleActions): IScheduleState => {
    switch (action.type) {
        case ScheduleActionTypes.LESSON_DATES:
            return {
                ...state,
                lessonDates: action.payload
            }
        default:
            return state
    }
}

export default scheduleReducer