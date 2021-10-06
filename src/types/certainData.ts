type _sideItems = { img: string, title: string | null }[]
export type certainModel = {
    sideItems: _sideItems
}

export interface ICertainData {
   readonly getModel: () => certainModel
}
