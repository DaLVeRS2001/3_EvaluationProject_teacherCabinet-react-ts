import {AppActions, AppActionTypes, IAppState} from "../../types/reducerTypes/app";



const initialState: IAppState = {
    isOpenSidebar: {
        hidden: false,
        is: false
    }
}


const appReducer = (state = initialState, action: AppActions):IAppState  => {
    switch (action.type) {
        case AppActionTypes.IS_OPEN_SIDEBAR:
            return {
                ...state,
                isOpenSidebar: action.payload
            }
        default:
            return state
    }
}





export default appReducer