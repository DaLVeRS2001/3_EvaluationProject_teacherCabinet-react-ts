import React, {useEffect, useState} from "react";
import tableS from "./style.module.scss"
import CustomSwitchers from "../../components/CustomSwitchers";
import {IScheduleTableProps} from "../../types/props";
import DateSwitcher from "../../components/DateSwitcher";
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IScheduleConnectState} from "../../types/reducerTypes/schedule";
import {getLessonDates, setCurrentDate} from "../../redux/action-creators/scheduleActions";

import {Table} from "./Table";
import getMedia from "../../services/getMedia";






const ScheduleTable: React.FC<IScheduleTableProps> =
    ({lessonDates, currentDate, currentWidth, getLessonDates, setCurrentDate}) => {
    const [selectedBlock, setSelectedBlock] = useState<null|string>(null)

    const {maxWidthMedias} = getMedia(),
        medias = [1400, ...maxWidthMedias]

    useEffect(() => {
        getLessonDates()
        //eslint-disable-next-line
    }, [])

        return (
            <div className={tableS.schedule}>
                <div className={tableS.schedule__switchers}>
                    <div>
                        <CustomSwitchers
                            onHandler={(el) => setSelectedBlock(el)} titles={['Расписание', 'Успеваемость']}
                        />
                        <DateSwitcher dateLang={'ru'} isShortcut={true} setCurrentDate={setCurrentDate}/>
                    </div><hr/>
                </div>
                {
                    currentWidth > medias[0]
                        ? <Table lessonDates={lessonDates} currentDate={currentDate}/>
                        : <Table
                            lessonDates={lessonDates}
                            currentDate={currentDate}
                            isMobile={{
                                is: true,
                                columnCount: (currentWidth <= medias[0] && currentWidth > medias[1]) ? 3
                                    : (currentWidth <= medias[1] && currentWidth > medias[2]) ? 2 : 1
                            }}
                        />
                }
            </div>
        )
    }

const mapStateToProps = (state: RootReducers): IScheduleConnectState => ({
    lessonDates: state.schedule.lessonDates,
    currentDate: state.schedule.currentDate,
    currentWidth: state.app.currentWidth
})

export default React.memo(connect(mapStateToProps, {getLessonDates, setCurrentDate})(ScheduleTable))