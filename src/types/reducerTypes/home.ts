//ALIASES
export type TUsers = {name: string}[]
export type TStudModal = {invitFetched: boolean, isOn: boolean, fields: {name: string, email: string}}

//RootState
export interface IHomeState {
    users: TUsers
    studModal: TStudModal,
}

//ENUMS
export enum HomeActionTypes{
    ALL_USERS= 'ALL_USERS',
    IS_STUDENT_MODAL_ON= 'IS_STUDENT_MODAL_ON',
    STUD_MODAL_INPUT= 'STUD_MODAL_INPUT',
    STUD_INVIT_FETCHED= 'STUD_INVIT_FETCHED',
    HOME_FIELDS_RESET= 'HOME_FIELDS_RESET',

}

//ACTIONS
 interface IUsersAction{
    type: HomeActionTypes.ALL_USERS,
    payload: TUsers
}
 interface IStudModalAction{
    type: HomeActionTypes.IS_STUDENT_MODAL_ON
}
 interface IStudModalInputAction{
    type: HomeActionTypes.STUD_MODAL_INPUT,
    payload: {val: string, type: string}
}
interface IHomeFieldResetAction{
    type: HomeActionTypes.HOME_FIELDS_RESET,
}
interface IStudInvitFetchedAction{
    type: HomeActionTypes.STUD_INVIT_FETCHED,
}


//RootActionsType
export type HomeActions = IUsersAction | IStudModalAction | IStudModalInputAction | IHomeFieldResetAction | IStudInvitFetchedAction

//CONNECT STATES
export interface IHomeConnectState{
    users: TUsers,
    isStudModalOn: boolean
    invitFetched: boolean
}
export interface IStudModalConnectState{
    studModal: TStudModal
}
export interface IInvitSuccessModalConnectState{
    invitFetched: boolean
}



