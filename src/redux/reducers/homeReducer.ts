import {HomeActions, HomeActionTypes, IHomeState} from "../../types/reducerTypes/home";


const initialState:IHomeState = {
    users: []
}


const homeReducer = (state = initialState, action: HomeActions):IHomeState  => {
    switch (action.type){
        case HomeActionTypes.ALL_USERS:
            return {
                users: action.payload
            }
        default:
            return state
    }
}


export default homeReducer