import React, {useEffect, useState} from "react";
import tableS from "./style.module.scss"
import CustomSwitchers from "../../components/CustomSwitchers";
import {IScheduleTableProps, TCountElHeight, TNowDate, TParsedStudent} from "../../types/props";
import DateSwitcher from "../../components/DateSwitcher";
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IScheduleConnectState} from "../../types/reducerTypes/schedule";
import {getLessonDates, setCurrentDate} from "../../redux/action-creators/scheduleActions";
import {TBody} from "./TBody";
import {THead} from "./THead";
import {THeadM} from "./mobile/THeadM";
import {TBodyM} from "./mobile/TBodyM";
import CertainData from "../../services/getCertainData";
import {TColors} from "../../types/#common";
import {Table} from "./Table";






const ScheduleTable: React.FC<IScheduleTableProps> = ({users, lessonDates, currentDate, getLessonDates, setCurrentDate}) => {
    const [selectedBlock, setSelectedBlock] = useState<null|string>(null)

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

    useEffect(() => {
        getLessonDates()
        //eslint-disable-next-line
    }, [])
    const someCount = 2
    const copyWeek = weekDays.map((el, idx, arr)=> {
        const num = (idx+1)*someCount
        return arr.slice(num-someCount, num)
    }).filter(el=> el.length)

    return (
            <div className={tableS.schedule}>
                <div className={tableS.schedule__switchers}>
                    <div>
                        <CustomSwitchers onHandler={(el) => setSelectedBlock(el)} titles={['Расписание', 'Успеваемость']}/>
                        <DateSwitcher dateLang={'ru'} isShortcut={true} setCurrentDate={setCurrentDate}/>
                    </div>
                    <hr/>
                </div>

                <Table lessonDates={lessonDates} currentDate={currentDate} isMobile={{is: true, columnCount: 3}}/>

            </div>
    )
}

const mapStateToProps = (state: RootReducers): IScheduleConnectState => ({
    lessonDates: state.schedule.lessonDates,
    currentDate: state.schedule.currentDate,
    currentWidth: state.app.currentWidth
})


export default React.memo(connect(mapStateToProps, {getLessonDates, setCurrentDate})(ScheduleTable))