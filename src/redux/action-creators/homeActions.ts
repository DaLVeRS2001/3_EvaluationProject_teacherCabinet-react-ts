import {Dispatch} from "redux";
import {HomeActions, HomeActionTypes, TUsers} from "../../types/reducerTypes/home";
import {instance} from "../../API/instance";

export const getUsers = () => (dispatch: Dispatch<HomeActions>) => {
        instance().get<TUsers>('users')
            .then(data => dispatch({type: HomeActionTypes.ALL_USERS, payload: data.data}))
    },
    handlerStudModal = () => (dispatch: Dispatch<HomeActions>) => {
         dispatch({type: HomeActionTypes.IS_STUDENT_MODAL_ON})
    },
    changeModalInput = ({val,type}:{val: string, type: string}) => (dispatch: Dispatch<HomeActions>) => {
        dispatch({type: HomeActionTypes.STUD_MODAL_INPUT, payload: {val, type}})
    },
    resetHomeFields =  () => (dispatch: Dispatch<HomeActions>) => {
        dispatch({type: HomeActionTypes.HOME_FIELDS_RESET})
    }