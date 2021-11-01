import React, {useEffect, useState} from "react";
import tableS from "./style.module.scss"
import CustomSwitchers from "../../components/CustomSwitchers";
import {IScheduleTableProps, TNowDate, TParsedStudent} from "../../types/props";
import DateSwitcher from "../../components/DateSwitcher";
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IScheduleConnectState} from "../../types/reducerTypes/schedule";
import {getLessonDates, setCurrentDate} from "../../redux/action-creators/scheduleActions";
import {TBody} from "./TBody";
import {THead} from "./THead";





const ScheduleTable: React.FC<IScheduleTableProps> = ({users, lessonDates, currentDate, getLessonDates, setCurrentDate}) => {
    const [selectedBlock, setSelectedBlock] = useState<null|string>(null)

    const getNowDate: TNowDate = (el) => ({
        pastTime: new Date(currentDate.pastDate).getTime(),
        currentTime: new Date(currentDate.nowDate).getTime(),
        lessonTime: new Date(el.date).getTime(),
        currentMonth: new Date(currentDate.nowDate).getMonth(),
        lessonMonth: new Date(el.date).getMonth()
    })

    const parseStudent = (idx: number, idx2: number): TParsedStudent => {
        return lessonDates.map((el): TParsedStudent => {
            const tableDay: number = new Date(new Date(el.date).setDate(new Date(el.date).getDate()-1)).getDay(), //td
                tableTime: number = +el.timeStart.split(':')[0] - 8, //tr
                //const tableDay: number = new Date(new Date(el.date).setDate(new Date(el.date).getDate() - 1)).getDay()
                is: boolean =
                    idx === tableTime && idx2 === tableDay
                    && getNowDate(el).lessonTime >= getNowDate(el).pastTime
                    && getNowDate(el).lessonTime <= getNowDate(el).currentTime
                    && getNowDate(el).lessonMonth === getNowDate(el).currentMonth
           // console.log((getNowDate(el).lessonWeek) +' '+ (getNowDate(el).pastWeek) + ' '+ el.studentName)
            //getNowDate(el).lessonWeek >= getNowDate(el).pastWeek
            if (is) return [idx, idx2, el.studentName, el.timeFinish]
            return ''
        }).filter(el => el)[0]
    }

    useEffect(() => {
        getLessonDates()
        //eslint-disable-next-line
    }, [])

    return (
            <div className={tableS.schedule}>
                <div className={tableS.schedule__switchers}>
                    <div>
                        <CustomSwitchers onHandler={(el) => setSelectedBlock(el)} titles={['Расписание', 'Успеваемость']}/>
                        <DateSwitcher dateLang={'ru'} isShortcut={true} setCurrentDate={setCurrentDate}/>
                    </div>
                    <hr/>
                </div>
                <table className={tableS.schedule__table}>
                    <THead/>
                    <TBody parseStudent={parseStudent}/>
                </table>
            </div>
    )
}

const mapStateToProps = (state: RootReducers): IScheduleConnectState => ({
    lessonDates: state.schedule.lessonDates,
    currentDate: state.schedule.currentDate
})


export default React.memo(connect(mapStateToProps, {getLessonDates, setCurrentDate})(ScheduleTable))