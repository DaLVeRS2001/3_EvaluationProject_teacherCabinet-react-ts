import {IArgIsOpen} from "./reducerTypes/app";
import {TCommonUsers, TStudModal, TUser, TUsers} from "./reducerTypes/home";
import {resetHomeFields} from "../redux/action-creators/homeActions";
import {getLessonDates} from "../redux/action-creators/scheduleActions";
import {TCurrentDate, TLessonDates} from "./reducerTypes/schedule";
import React from "react";
import {TColors} from "./#common";

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
    users: TUsers
    isStudModalOn: boolean
    invitFetched: boolean
}

//ScheduleTable
export type TParsedStudent = [number, number, string, string, string];
export type TNowDate = (el?: any) =>
    {pastTime: number, currentTime: number, lessonTime: number, currentMonth: number, lessonMonth: any};
export type TCountElHeight = (timeStart: string, timeFinish: string, defaultHeight?: number)=> number
export type TIsMobile = {
    is: boolean,
    tablePartCount: number
    indexSpan: number
}

export interface IScheduleTableProps{
    lessonDates: TLessonDates
    currentDate: TCurrentDate
    currentWidth: number
    getLessonDates: ()=> void
    setCurrentDate: (date: TCurrentDate)=> void
}

//ScheduleTable > TBody
export interface ITBodyProps {
    parseStudent: (idx: number, idx2: number) => any
    countElHeight: TCountElHeight
    randomColors:  TColors
    isMobile?: TIsMobile
}

//ScheduleTable > THead
export interface ITHead {
    isMobile?: TIsMobile
}

//ScheduleTable > Table
export interface ITable{
    isMobile?: {
        is: boolean,
        columnCount: number
    }
    lessonDates: TLessonDates
    currentDate: TCurrentDate
}

//NoUsers
export interface INoUsersProps{
    handlerStudModal: ()=> void
}

//MyStudents
export interface IMyStudentsProps{
    handlerStudModal: ()=> void
    students: TUsers
}

//AddStudModal
export interface IAddStudModalProps{
    studModal: TStudModal
    changeModalInput: (arg: {val: string, type: string})=> void
    handlerStudModal: ()=> void
    resetHomeFields: ()=> void
    requestStudInvitation: ()=> void
    addStudent: (student: TUser)=> void
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

//InvitationSuccessModal
export interface IInviSuccessModalProps{
    requestStudInvitation: ()=> void
}

//#CustomModal
export interface ICustomModalProps{
    modalHandler: ()=> void
    headerTitle: string
    btnTitle: string
    btnHandler?: ()=> void
}

//CustomSlider
export interface ICustomSlider{
    items: TCommonUsers
    skippedItemsCount?: number
    shownItemCount?: number
}

//DateSwitcher
export interface IDateSwitcher{
    dateLang: string | 'ru' | 'en'
    isShortcut: boolean
    setCurrentDate: (date: TCurrentDate)=> void
}