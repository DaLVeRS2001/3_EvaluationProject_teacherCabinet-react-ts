import React, {useEffect, useState} from "react";
import switchS from "./style.module.scss"
import {ICustomSwitchersProps, TSelectedSwitcher} from "../../types/props";



const CustomSwitchers: React.FC<ICustomSwitchersProps> = ({titles, onHandler}) => {
    const [selectedSwitcher, selectSwitcher] = useState<TSelectedSwitcher>(
        titles.map((el, idx) =>
            idx === 0
                ? {selected: true}
                : {selected: false})
    )

    useEffect(()=> {
        onHandler(titles[0])
        //eslint-disable-next-line
    }, [])

    return (
        <div className={switchS.switchers}>
            {titles.map((title, idx) => {
                const select = (arr: TSelectedSwitcher): TSelectedSwitcher => {
                    const copyArr = [...arr].map(() => ({selected: false}))
                    copyArr?.splice(idx, 1, {selected: true})
                    onHandler(title)
                    return copyArr
                }

                return <span key={idx}
                    data-selected={selectedSwitcher[idx].selected}
                    onClick={() => selectSwitcher([...select(selectedSwitcher)])}
                    className={switchS.switchers__item}>
                    {title}
                </span>

            })}
        </div>
    )
}


export default CustomSwitchers

