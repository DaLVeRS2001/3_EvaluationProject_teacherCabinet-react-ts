import React, {useEffect, useState} from "react";
import dateSwS from "./style.module.scss"
import arrow from "../../assets/arrow.svg"
import {dateShortcut} from "../../services/getDateShortcut";
import {IDateSwitcher} from "../../types/props";
import myLocalStorage from "../../services/myLocalStorage";




const DateSwitcher: React.FC<IDateSwitcher> = ({dateLang, isShortcut, setCurrentDate}) => {
    const year: number = new Date().getFullYear()

    const [nowDate, setNowDate] = useState<Date>(new Date(year, 0, 8)),
        pastDate: Date = new Date(new Date(nowDate).setDate(nowDate.getDate() - 7)),
        dateNowShortcut = dateShortcut(nowDate, dateLang, {month: isShortcut ? "short" : "long"}),
        datePastShortcut = dateShortcut(pastDate, dateLang, {month: isShortcut ? "short" : "long"});

    useEffect(()=> {
        const parsedCurrentDate = nowDate
        setCurrentDate(parsedCurrentDate)
        //eslint-disable-next-line
    }, [nowDate])

    const activeWeek = `${pastDate.getDate()} ${datePastShortcut} - ${nowDate.getDate()} ${dateNowShortcut}`
        .replace(/\./g, '')

    const dateSwitcher = (actionType: 'prev' | 'next'): void => {
        actionType === 'prev'
            ? setNowDate(new Date(new Date(nowDate).setDate(nowDate.getDate() - 7)))
            : setNowDate(new Date(new Date(nowDate).setDate(nowDate.getDate() + 7)))
    }

    return (
        <div className={dateSwS.dateSwitcher}>
            <span>{activeWeek}</span>
            <img
                src={arrow} alt="<" className={dateSwS.dateSwitcher__switcher}
                onClick={()=>dateSwitcher('prev')} data-switcher={'prev'}
                hidden={nowDate.getMonth() === 0 && nowDate.getDate() <= 8}
            />
            <img
                src={arrow} alt=">" className={dateSwS.dateSwitcher__switcher}
                onClick={()=>dateSwitcher('next')} data-switcher={'next'}
                hidden={nowDate.getMonth() === 11 && nowDate.getDate() > 30}
            />
        </div>
    )
}


export default React.memo(DateSwitcher)

