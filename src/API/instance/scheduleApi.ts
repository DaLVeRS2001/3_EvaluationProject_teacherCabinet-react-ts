import makeRequest from "../../services/makeRequest";

import {IScheduleApi} from "../../types/apiTypes";



const scheduleApi: IScheduleApi = {
    getAllLessonDates(){
        return makeRequest<"get">({url: "lessonDates", method: "get"})
    }
}


export default scheduleApi
