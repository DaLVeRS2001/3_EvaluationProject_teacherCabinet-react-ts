import React from "react";
import asideS from "./style.module.scss"
import {ISideProps} from "../../types/props";


const SideItem: React.FC<ISideProps> =
    ({hidden, imgPath, title, onHide}) => {

        if (onHide && !hidden.is) return null
        return (
            <div onClick={onHide} className={asideS.sidebar__item}>
                <img src={imgPath} alt="No"/>
                {!hidden.hidden && <span>{title}</span>}
            </div>
        )
    }

export default SideItem