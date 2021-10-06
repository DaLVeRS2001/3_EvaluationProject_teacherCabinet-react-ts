import {Dispatch} from "redux";
import {AppActions, AppActionTypes, IArgIsOpen} from "../../types/reducerTypes/app";


export const setIsOpenSidebar = (isOpen: IArgIsOpen) => (dispatch: Dispatch<AppActions>) => {
    dispatch({type: AppActionTypes.IS_OPEN_SIDEBAR, payload: isOpen})
}