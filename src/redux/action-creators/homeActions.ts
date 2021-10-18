import {Dispatch} from "redux";
import {HomeActions, HomeActionTypes} from "../../types/reducerTypes/home";
import {TDefaultAC} from "../../types/#common";
import homeApi from "../../API/homeApi";

export const getUsers: TDefaultAC = () => (dispatch: Dispatch<HomeActions>):void => {
        homeApi.getAllStudents()
            .then((students)=> dispatch({type: HomeActionTypes.ALL_USERS, payload: students}))
    },
    handlerStudModal:TDefaultAC = () => (dispatch: Dispatch<HomeActions>):void=> {
         dispatch({type: HomeActionTypes.IS_STUDENT_MODAL_ON})
    },
    changeModalInput:TDefaultAC = ({val,type}:{val: string, type: string}) => (dispatch: Dispatch<HomeActions>):void => {
        dispatch({type: HomeActionTypes.STUD_MODAL_INPUT, payload: {val, type}})
    },
    resetHomeFields:TDefaultAC =  () => (dispatch: Dispatch<HomeActions>):void => {
        dispatch({type: HomeActionTypes.HOME_FIELDS_RESET})
    },
    requestStudInvitation:TDefaultAC =  () => (dispatch: Dispatch<HomeActions>):void => {
        dispatch({type: HomeActionTypes.STUD_INVIT_FETCHED})
    }