import React from "react";
import CertainData from "../../services/getCertainData";
import {ITHead} from "../../types/props";



export const THead: React.FC<ITHead> = ({isMobile}) => {

    const {weekDays} = new CertainData().getModel()

    return <thead>
        <tr>
            <th data-column={isMobile?.indexSpan}/>
            {weekDays.map((day, idx) => {
                const availableIndex = isMobile &&
                    (idx < isMobile.tablePartCount && idx > ((isMobile.tablePartCount-isMobile.indexSpan)-1))

                if((availableIndex && isMobile.is) || (!isMobile))
                    return <th key={idx}><span>{idx + 1}</span><br/>{day}</th>
            })}
        </tr>
    </thead>
}