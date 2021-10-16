import {HomeActions, HomeActionTypes, IHomeState} from "../../types/reducerTypes/home";


const initialState:IHomeState = {
    users: [],
    studModal: {
        isOn: false,
        fields: {
            name: '',
            email: ''
        }
    }
}


const homeReducer = (state = initialState, action: HomeActions):IHomeState  => {
    switch (action.type){
        case HomeActionTypes.ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case HomeActionTypes.IS_STUDENT_MODAL_ON:
            return {
                ...state,
                studModal: {...state.studModal, isOn: !state.studModal.isOn}
            }
        case HomeActionTypes.STUD_MODAL_INPUT:
            return {
                ...state,
                studModal: {
                    ...state.studModal,
                    fields: {...state.studModal.fields, [action.payload.type]: action.payload.val}
                }
            }
        case HomeActionTypes.HOME_FIELDS_RESET:
            return {
                ...state,
                studModal: {...initialState.studModal}
            }

        default:
            return state
    }
}


export default homeReducer