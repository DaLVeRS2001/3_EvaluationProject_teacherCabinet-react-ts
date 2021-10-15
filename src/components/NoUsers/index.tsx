import React from "react";
import noUsersS from "./style.module.scss"
import calendar from "../../assets/calendar.svg"
import CustomAddButton from "../CustomAddBtn";


interface INoUsersProps{
}

const NoUsers: React.FC<INoUsersProps> = () => {



    return (
        <div className={noUsersS.noUsers}>
            <img className={noUsersS.noUsers__icon}  src={calendar} alt="Calendar"/>
            <span>Для планирования уроков в расписании<br/> сначала добавьте учеников</span>
            <CustomAddButton
                btnColor={'#ef4934'} title={'Добавить ученика'} onHandler={()=> console.log('kek')}
            />
        </div>
    )
}



export default NoUsers

