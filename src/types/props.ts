import {IArgIsOpen} from "./reducerTypes/app";
import {TStudModal, TUsers} from "./reducerTypes/home";
import {resetHomeFields} from "../redux/action-creators/homeActions";

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

//Home
export interface IHomeProps{
    getUsers: ()=> void
    handlerStudModal: ()=> void
    users: TUsers,
    isStudModalOn: boolean
}

//ScheduleTable
export interface IScheduleTableProps{
    users: TUsers
}

//NoUsers
export interface INoUsersProps{
    handlerStudModal: ()=> void
}

//MyStudents
export interface IMyStudentsProps{
    handlerStudModal: ()=> void
}

//AddStudModal
export interface IAddStudModalProps{
    changeModalInput: (arg: {val: string, type: string})=> void
    studModal: TStudModal,
    handlerStudModal: ()=> void
    resetHomeFields: ()=> void
}

//ModalInput
export interface IModalInput{
    title: string
    type: string
    ph?: string
    name: string
    value: string
    handler: (arg: {val: string, type: string})=> void
    fieldError?: any
    style?: {}
}