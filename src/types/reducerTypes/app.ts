//ALIASES
export interface IArgIsOpen{
    hidden: boolean,
    is: boolean
}

//ENUMS
export enum AppActionTypes  {
    IS_OPEN_SIDEBAR = 'IS_OPEN_SIDEBAR',
    APP_CURRENT_WIDTH = 'APP_CURRENT_WIDTH'
}

//RootState
export interface IAppState {
    isOpenSidebar: {
        hidden: boolean,
        is: boolean
    }
    currentWidth: number
}

//ACTIONS
export interface IOpenSidebarAction {
    type: AppActionTypes.IS_OPEN_SIDEBAR,
    payload: IArgIsOpen
}
export interface IAppCurrentWidthAction {
    type: AppActionTypes.APP_CURRENT_WIDTH,
    payload: number
}

//RootActionsType
export type AppActions = IOpenSidebarAction | IAppCurrentWidthAction

//CONNECT STATES
export interface IStudentListConnectState{
    currentWidth: number
}
export interface ISidebarConnectState{
    isNeedSize: IArgIsOpen
}