import tableS from "./style.module.scss";
import React from "react";
import {THead} from "./THead";
import {TBody} from "./TBody";
import {ITable, TCountElHeight, TNowDate, TParsedStudent} from "../../types/props";
import {TColors} from "../../types/#common";
import CertainData from "../../services/getCertainData";




export const Table: React.FC<ITable> =
    ({isMobile, lessonDates, currentDate}) => {

    const {weekDays} = new CertainData().getModel()

    const getNowDate: TNowDate = (el) => ({
        pastTime: new Date(currentDate.pastDate).getTime(),
        currentTime: new Date(currentDate.nowDate).getTime(),
        lessonTime: new Date(el.date).getTime(),
        currentMonth: new Date(currentDate.nowDate).getMonth(),
        lessonMonth: new Date(el.date).getMonth()
    })

    const randomColors: TColors = [
        '#58f813', '#cfcd0f', '#11d9c8', '#ffab00', '#00ffc6', '#ffa668', '#ff00fa', '#ff86a1', '#786ea4'
    ]

    const countElHeight: TCountElHeight = (timeStart, timeFinish, defaultHeight = 60)=> {
        const time = [+timeStart?.split(":")[0], +timeFinish?.split(":")[0]],
            parsedTime: number = (time[1] - (time[0] - 8)) - 7,
            countedHeight = defaultHeight * parsedTime
        if (parsedTime <= 1) return countedHeight
        return countedHeight + 10 * (parsedTime - 1)
    }

    const parseStudent = (idx: number, idx2: number): boolean | TParsedStudent => {
        return lessonDates.map((el): boolean | TParsedStudent => {
            const parsedTime = [+el.timeStart.split(':')[0], +el.timeFinish.split(':')[0]]
            const tableDay: number = new Date(new Date(el.date).setDate(new Date(el.date).getDate()-1)).getDay(), //td
                tableTime: [number, number] = [parsedTime[0] - 8, parsedTime[1]-8], //tr
                toIs = (condition: boolean): boolean => condition && idx2 === tableDay
                    && getNowDate(el).lessonTime >= getNowDate(el).pastTime
                    && getNowDate(el).lessonTime <= getNowDate(el).currentTime
                    && getNowDate(el).lessonMonth === getNowDate(el).currentMonth

            if (toIs(idx === tableTime[0]))
                return [idx, idx2, el.studentName, el.timeStart, el.timeFinish]
            return toIs(idx <= tableTime[1])
        }).filter(el => el)[0]
    }

    const copyWeek = weekDays.map((el, idx, arr)=> {
        const columns = isMobile ? isMobile.columnCount : 7,
            num = (idx + 1) * columns;
        return arr.slice(num - columns, num)
    }).filter(el=> el.length)

    return <table className={tableS.schedule__table}>
        {copyWeek.map((el, idx)=> {
            return <React.Fragment key={idx}>
                <THead
                    isMobile={isMobile && {
                    is: isMobile.is,
                    indexSpan: isMobile.columnCount,
                    tablePartCount: (isMobile.columnCount*(idx+1))
                    }}
                />
                <TBody
                    countElHeight={countElHeight}
                    parseStudent={parseStudent}
                    randomColors={randomColors}
                    isMobile={isMobile && {
                        is: isMobile.is,
                        indexSpan: isMobile.columnCount,
                        tablePartCount: (isMobile.columnCount*(idx+1))
                    }}
                />
            </React.Fragment>
        })}
    </table>
}