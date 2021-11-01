import {getRandomColor} from "../../services/getRandomColor";
import tableS from "./style.module.scss";
import ava from "../../assets/sidebar/anonymous.svg";
import React from "react";
import CertainData from "../../services/getCertainData";
import {ITBodyProps, TParsedStudent} from "../../types/props";


export const TBody: React.FC<ITBodyProps> = ({parseStudent}) => {

    const {weekDays} = new CertainData().getModel()

    const randomColors: `#${string}`[] = [
        '#58f813', '#cfcd0f', '#11d9c8', '#ffab00', '#00ffc6', '#ffa668', '#ff00fa', '#ff86a1', '#786ea4'
    ]

    const countElHeight = (time: string, defaultHeight: number = 40): number => {
        const parsedTime: number = +time.split(":")[0] - 7,
            countedHeight = defaultHeight * parsedTime
        if (parsedTime <= 1) return countedHeight
        return countedHeight + 10 * (parsedTime - 1)
    }

    return <tbody>
        {weekDays.map((day, idx) => {
            const nowTime: string = `${idx + 8}:00`

            return <tr key={idx}>
                <th>{nowTime}</th>
                {weekDays.map((day, idx2) => {
                    const parsed: TParsedStudent = parseStudent(idx, idx2),
                        isStudent: boolean | '' = parsed && (idx === parsed[0] && idx2 === parsed[1])

                    return <td key={idx2} height={50}>
                        {isStudent && parsed[2]
                            ? <div style={{
                                height: countElHeight(parsed[3]), background: getRandomColor(randomColors)
                            }}
                                   data-filled={true} className={tableS.schedule__content}>
                                <div>
                                    <img src={ava} alt="ava"/>
                                    <div>{parsed[2]}</div>
                                </div>
                            </div>
                            : <div className={tableS.schedule__content}>
                                <div/>
                            </div>
                        }
                    </td>
                })}
            </tr>
        })}
    </tbody>
}


