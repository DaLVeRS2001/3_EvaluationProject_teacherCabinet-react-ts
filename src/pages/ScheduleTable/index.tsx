import React, {useEffect, useState} from "react";
import tableS from "./style.module.scss"
import CertainData from "../../services/getCertainData";
import CustomSwitchers from "../../components/CustomSwitchers";
import {IScheduleTableProps} from "../../types/props";
import DateSwitcher from "../../components/DateSwitcher";
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IScheduleConnectState} from "../../types/reducerTypes/schedule";
import {getLessonDates} from "../../redux/action-creators/scheduleActions";





const ScheduleTable:React.FC<IScheduleTableProps> = ({users, lessonDates, getLessonDates}) => {
    const {months, weekDays} = new CertainData().getModel()
    const [selectedBlock, setSelectedBlock] = useState<null|string>(null)

    useEffect(() => {
        getLessonDates()
        //eslint-disable-next-line
    }, [])


    return (
            <div className={tableS.schedule}>
                <div className={tableS.schedule__switchers}>
                    <div>
                        <CustomSwitchers onHandler={(el) => setSelectedBlock(el)} titles={['Расписание', 'Успеваемость']}/>
                        <DateSwitcher dateLang={'ru'} isShortcut={true}/>
                    </div>
                    <hr/>
                </div>
                <table className={tableS.schedule__table}>
                    <thead>
                    <tr>
                        <th/>
                        {weekDays.map((day, idx) =>
                            <th key={idx}>{idx + 1}<br/>{day}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {weekDays.map((day, idx) => <tr key={idx}>
                        <th>{`${idx + 8}:00`}</th>
                        {weekDays.map((day, idx)=>  <td key={idx} height={50} >
                                <div  className={tableS.schedule__content}>
                                    <div></div>
                                </div>
                            </td>)}
                    </tr>)}
                    </tbody>
                </table>
            </div>
    )
}

const mapStateToProps = (state: RootReducers): IScheduleConnectState => ({
    lessonDates: state.schedule.lessonDates
})


export default connect(mapStateToProps, {getLessonDates})(ScheduleTable)