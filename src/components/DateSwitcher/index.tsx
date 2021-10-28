import React from "react";
import dateSwS from "./style.module.scss"
import arrow from "../../assets/arrow.svg"


interface IDateSwitcher{

}

const DateSwitcher: React.FC<IDateSwitcher> = ({}) => {
    return (
        <div className={dateSwS.dateSwitcher}>
            <span></span>
            <img src={arrow} alt="<" className={dateSwS.dateSwitcher__switcher} data-switcher={'prev'}/>
            <img src={arrow} alt=">" className={dateSwS.dateSwitcher__switcher} data-switcher={'next'}/>
        </div>
    )
}


export default DateSwitcher

