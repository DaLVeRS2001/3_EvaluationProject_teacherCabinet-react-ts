import {Dispatch} from "redux";
import {HomeActions, HomeActionTypes, TUsers} from "../../types/reducerTypes/home";
import {instance} from "../../API/instance";
import {TDefaultAC} from "../../types/#common";

export const getUsers: TDefaultAC = () => (dispatch: Dispatch<HomeActions>):void => {
        instance().get<TUsers>('users')
            .then(data => dispatch({type: HomeActionTypes.ALL_USERS, payload: data.data}))
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