import React, {useEffect, useState} from "react";
import tableS from "./style.module.scss"
import CertainData from "../../services/getCertainData";
import CustomSwitchers from "../../components/CustomSwitchers";
import {IScheduleTableProps, TNowDate, TParsedStudent} from "../../types/props";
import DateSwitcher from "../../components/DateSwitcher";
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IScheduleConnectState, TLessonDate} from "../../types/reducerTypes/schedule";
import {getLessonDates, setCurrentDate} from "../../redux/action-creators/scheduleActions";
import {getRandomColor} from "../../services/getRandomColor";
import ava from "../../assets/sidebar/anonymous.svg"
import {TBody} from "./TBody";





const ScheduleTable: React.FC<IScheduleTableProps> = ({users, lessonDates, currentDate, getLessonDates, setCurrentDate}) => {
    const [selectedBlock, setSelectedBlock] = useState<null|string>(null)

    const {weekDays} = new CertainData().getModel()

    const getNowDate: TNowDate = (el) => ({
        pastWeek: new Date(new Date(currentDate).setDate(currentDate.getDate()- 7)).getDate(),
        currentWeek: currentDate.getDate(),
        lessonWeek: new Date(el.date).getDate(),
        currentMonth: new Date(currentDate).getMonth(),
        lessonMonth: new Date(el.date).getMonth()
    })

    const parseStudent = (idx: number, idx2: number): TParsedStudent => {
        return lessonDates.map((el): TParsedStudent => {
            const tableDay: number = new Date(new Date(el.date).setDate(new Date(el.date).getDate() - 1)).getDay(),
                tableTime: number = +el.timeStart.split(':')[0] - 8,
                is: boolean =
                    idx === tableTime && idx2 === tableDay
                    && getNowDate(el).lessonWeek >= getNowDate(el).pastWeek
                    && getNowDate(el).lessonWeek <= getNowDate(el).currentWeek
                    && getNowDate(el).lessonMonth === getNowDate(el).currentMonth

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
                    <thead>
                    <tr>
                        <th/>
                        {weekDays.map((day, idx) =>
                            <th key={idx}><span>{idx + 1}</span><br/>{day}</th>)}
                    </tr>
                    </thead>
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