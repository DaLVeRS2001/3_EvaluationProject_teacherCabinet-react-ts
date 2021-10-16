import React from "react";
import noUsersS from "./style.module.scss"
import calendar from "../../assets/calendar.svg"
import CustomAddButton from "../CustomAddBtn";
import {INoUsersProps} from "../../types/props";




const NoUsers: React.FC<INoUsersProps> = ({handlerStudModal}) => {



    return (
        <div className={noUsersS.noUsers}>
            <img className={noUsersS.noUsers__icon}  src={calendar} alt="Calendar"/>
            <span>Для планирования уроков в расписании<br/> сначала добавьте учеников</span>
            <CustomAddButton
                btnColor={'#ef4934'} title={'Добавить ученика'} onHandler={()=> handlerStudModal()}
            />
        </div>
    )
}



export default NoUsers

