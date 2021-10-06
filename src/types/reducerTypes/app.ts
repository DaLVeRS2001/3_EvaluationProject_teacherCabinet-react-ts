export interface ISidebarConnectState{
    isNeedSize: IArgIsOpen
}

export interface IArgIsOpen{
    hidden: boolean,
    is: boolean
}

export enum AppActionTypes  {
    IS_OPEN_SIDEBAR = 'IS_OPEN_SIDEBAR'
}

export interface IAppState {
    isOpenSidebar: {
        hidden: boolean,
        is: boolean
    }
}

export interface IOpenSidebarAction {
    type: AppActionTypes.IS_OPEN_SIDEBAR,
    payload: IArgIsOpen
}


export type AppActions = IOpenSidebarAction