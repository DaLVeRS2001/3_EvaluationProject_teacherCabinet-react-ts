import React, {useState} from "react";
import tableS from "./style.module.scss"
import CertainData from "../../services/getCertainData";
import CustomSwitchers from "../../components/CustomSwitchers";
import {IScheduleTableProps} from "../../types/props";





const ScheduleTable:React.FC<IScheduleTableProps> = ({users}) => {
    const {months, weekDays} = new CertainData().getModel()
    const [selectedBlock, setSelectedBlock] = useState<null|string>(null)



    return (
            <div className={tableS.schedule}>
                <div className={tableS.schedule__switchers}>
                    <CustomSwitchers onHandler={(el) => setSelectedBlock(el)} titles={['Расписание', 'Успеваемость']}/>
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
                        <td height={50}>
                            <div>asfaasfa</div>
                        </td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
    )
}

export default ScheduleTable