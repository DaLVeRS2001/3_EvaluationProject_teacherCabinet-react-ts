import {Dispatch} from "redux";
import {AppActions, AppActionTypes, IArgIsOpen} from "../../types/reducerTypes/app";
import {TDefaultAC} from "../../types/#common";


export const setIsOpenSidebar = (isOpen: IArgIsOpen) => (dispatch: Dispatch<AppActions>) => {
        dispatch({type: AppActionTypes.IS_OPEN_SIDEBAR, payload: isOpen})
    },
    setAppCurrentWidth: TDefaultAC = (width: number) => (dispatch: Dispatch<AppActions>): void => {
        dispatch({type: AppActionTypes.APP_CURRENT_WIDTH, payload: width})
}