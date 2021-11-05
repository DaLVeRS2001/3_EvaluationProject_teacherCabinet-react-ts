import {getRandomColor} from "../../services/getRandomColor";
import tableS from "./style.module.scss";
import ava from "../../assets/sidebar/anonymous.svg";
import React from "react";
import CertainData from "../../services/getCertainData";
import {ITBodyProps, TParsedStudent} from "../../types/props";





export const TBody: React.FC<ITBodyProps> =
    ({parseStudent, isMobile, countElHeight, randomColors}) => {
    const {weekDays} = new CertainData().getModel()

    return <tbody>
    {weekDays.map((day, idx) => {
        const nowTime: string = `${idx + 8}:00`

        return <tr key={idx}>
            <th>{nowTime}</th>
            {weekDays.map((day, idx2) => {
                const parsed: TParsedStudent  = parseStudent(idx, idx2),
                    isStudent: boolean  = parsed && (idx === parsed[0] && idx2 === parsed[1]),
                    availableIndex = isMobile &&
                        (idx2 < isMobile.tablePartCount && idx2 > ((isMobile.tablePartCount-isMobile.indexSpan)-1))

                if((availableIndex && isMobile.is) || (!isMobile)){
                    return <td  key={idx2} height={70}>
                        {isStudent
                            ? <div
                                style={{
                                    height: countElHeight(parsed[3], parsed[4]),
                                    background: getRandomColor(randomColors)
                                }}
                                data-filled={true} className={tableS.schedule__content}
                            >
                                <div>
                                    <img src={ava} alt="ava"/>
                                    <div>{parsed[2]}</div>
                                </div>
                            </div>
                            : <div
                                data-filled={parsed ?? false}
                                className={tableS.schedule__content}
                            >
                                <div/>
                            </div>
                        }
                    </td>
                }
            })}
        </tr>
    })}
    </tbody>
}


