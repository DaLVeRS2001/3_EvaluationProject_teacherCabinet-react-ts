import React from "react";
import CertainData from "../../../services/getCertainData";
import {ITHeadM} from "../../../types/props";


export const THeadM: React.FC<ITHeadM> = ({isMobile}) => {

    const {weekDays} = new CertainData().getModel()



    return <thead>
        <tr>
            <th/>
            {weekDays.map((day, idx) => {
                const availableIndex = isMobile && (idx < isMobile.tablePartCount && idx > ((isMobile.tablePartCount-isMobile.indexSpan)-1))
                if((availableIndex && isMobile.is) || (!isMobile)) return <th key={idx}><span>{idx + 1}</span><br/>{day}</th>
            })}
        </tr>
    </thead>
}

