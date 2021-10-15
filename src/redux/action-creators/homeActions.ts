import {Dispatch} from "redux";
import {HomeActions, HomeActionTypes, TUsers} from "../../types/reducerTypes/home";
import {instance} from "../../API/instance";

export const getUsers = () => (dispatch: Dispatch<HomeActions>) => {
    instance().get<TUsers>('users')
        .then(data=> dispatch({type: HomeActionTypes.ALL_USERS, payload: data.data}))
}