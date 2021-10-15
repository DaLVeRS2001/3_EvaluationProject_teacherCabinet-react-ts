
export type TUsers = {name: string}[]

export interface IHomeState {
    users: {name: string}[]
}


export enum HomeActionTypes{
    ALL_USERS= 'ALL_USERS'
}

export interface IUsersAction{
    type: HomeActionTypes.ALL_USERS,
    payload: TUsers
}
export type HomeActions = IUsersAction

export interface IHomeConnectState{
    users: TUsers
}
