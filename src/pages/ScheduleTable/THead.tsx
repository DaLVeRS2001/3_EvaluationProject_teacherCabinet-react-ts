import React from "react";
import CertainData from "../../services/getCertainData";

export const THead = () => {

    const {weekDays} = new CertainData().getModel()

    return <thead>
        <tr>
            <th/>
            {weekDays.map((day, idx) =>
                <th key={idx}><span>{idx + 1}</span><br/>{day}</th>)}
        </tr>
    </thead>
}

