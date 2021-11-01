import React, {useEffect, useState} from "react";
import dateSwS from "./style.module.scss"
import arrow from "../../assets/arrow.svg"
import {dateShortcut} from "../../services/getDateShortcut";
import {IDateSwitcher} from "../../types/props";




const DateSwitcher: React.FC<IDateSwitcher> = ({dateLang, isShortcut, setCurrentDate}) => {
    const year: number = new Date().getFullYear(),
        defaultDate = new Date(year, 0)

    const [pastDate, setPastDate] = useState<Date>(new Date(new Date(defaultDate)
            .setDate(defaultDate.getDate() - defaultDate.getDay() + 1))),
        nowDate: Date = new Date(new Date(pastDate).setDate(pastDate.getDate()+6)),
        dateNowShortcut: string = dateShortcut(nowDate, dateLang, {month: isShortcut ? "short" : "long"}),
        datePastShortcut: string = dateShortcut(pastDate, dateLang, {month: isShortcut ? "short" : "long"});

    useEffect(()=> {
        setCurrentDate({nowDate, pastDate})
        //eslint-disable-next-line
    }, [pastDate])

    const activeWeek = `${pastDate.getDate()} ${datePastShortcut} - ${nowDate.getDate()} ${dateNowShortcut}`
        .replace(/\./g, '')

    const dateSwitcher = (actionType: 'prev' | 'next'): void => {
        actionType === 'prev'
            ? setPastDate(new Date(new Date(pastDate).setDate(pastDate.getDate() - 7)))
            : setPastDate(new Date(new Date(pastDate).setDate(pastDate.getDate() + 7)))
    }

    return (
        <div className={dateSwS.dateSwitcher}>
            <span>{activeWeek}</span>
            <img
                src={arrow} alt="<" className={dateSwS.dateSwitcher__switcher}
                onClick={()=>dateSwitcher('prev')} data-switcher={'prev'}
                hidden={nowDate.getMonth() === 0 && nowDate.getDate() <= 8 && nowDate.getFullYear() === year}
            />
            <img
                src={arrow} alt=">" className={dateSwS.dateSwitcher__switcher}
                onClick={()=>dateSwitcher('next')} data-switcher={'next'}
              hidden={ nowDate.getFullYear() !== year || (nowDate.getDate() === 31 && nowDate.getMonth() === 11)}
            />
        </div>
    )
}


export default React.memo(DateSwitcher)

