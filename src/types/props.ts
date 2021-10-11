import {IArgIsOpen} from "./reducerTypes/app";

//SideBar
export interface ISideProps {
    hidden: IArgIsOpen,
    imgPath: string
    title: string|null,
    onHide?: ()=> void
}
export interface ISidebarProps{
    isNeedSize: IArgIsOpen
    setIsOpenSidebar: (isOpen: IArgIsOpen) => void
}

//CustomSwitchers
export interface ICustomSwitchersProps{
    titles: string[]
    onHandler: (selectedSwitcher: string)=> void
}
export type TSelectedSwitcher = {selected: boolean}[]

//CustomAddBtn
export interface ICustomAddButtonProps{
    btnColor: string
    title: string
    onHandler: ()=> void
    style?: {}
}