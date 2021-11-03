import {AppActions, AppActionTypes, IAppState} from "../../types/reducerTypes/app";



const initialState: IAppState = {
    isOpenSidebar: {
        hidden: false,
        is: false
    },
    currentWidth: 0
}


const appReducer = (state = initialState, action: AppActions):IAppState  => {
    switch (action.type) {
        case AppActionTypes.IS_OPEN_SIDEBAR:
            return {
                ...state,
                isOpenSidebar: action.payload
            }
        case AppActionTypes.APP_CURRENT_WIDTH:
            return {
                ...state,
                currentWidth: action.payload
            }
        default:
            return state
    }
}





export default appReducer