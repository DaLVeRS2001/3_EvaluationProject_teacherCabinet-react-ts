import React, {useState} from "react";
import dateSwS from "./style.module.scss"
import arrow from "../../assets/arrow.svg"
import {dateShortcut} from "../../services/getDateShortcut";
import {IDateSwitcher} from "../../types/props";




const DateSwitcher: React.FC<IDateSwitcher> = ({dateLang, isShortcut}) => {
    const year: number = new Date().getFullYear()

    const [currentDate, setCurrentDate] = useState<Date>(new Date(year, 0, 8)),
        pastDate: Date =  new Date(new Date(currentDate).setDate(currentDate.getDate() > 1 ? currentDate.getDate() - 7 :currentDate.getDate() )),
        dateNowShortcut = dateShortcut(currentDate, dateLang, {month: isShortcut ? "short" : "long"}),
        datePastShortcut = dateShortcut(pastDate, dateLang, {month: isShortcut ? "short" : "long"});

    const activeWeek = `${pastDate.getDate()} ${datePastShortcut} - ${currentDate.getDate()} ${dateNowShortcut}`
        .replace(/\./g, '')

    const dateSwitcher = (actionType: 'prev' | 'next'): void => {
        actionType === 'prev'
            ? setCurrentDate(new Date(new Date(currentDate).setDate(currentDate.getDate() - 7)))
            : setCurrentDate(new Date(new Date(currentDate).setDate(currentDate.getDate() + 7)))
    }

    return (
        <div className={dateSwS.dateSwitcher}>
            <span>{activeWeek}</span>
            <img
                src={arrow} alt="<" className={dateSwS.dateSwitcher__switcher}
                onClick={()=>dateSwitcher('prev')} data-switcher={'prev'}
                hidden={currentDate.getMonth() === 0 && currentDate.getDate() <= 8}
            />
            <img
                src={arrow} alt=">" className={dateSwS.dateSwitcher__switcher}
                onClick={()=>dateSwitcher('next')} data-switcher={'next'}
                hidden={currentDate.getMonth() === 11 && currentDate.getDate() > 30}
            />
        </div>
    )
}


export default React.memo(DateSwitcher)

