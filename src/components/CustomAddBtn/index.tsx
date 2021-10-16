import React, {useEffect} from "react";
import addBtnS from "./style.module.scss"
import {ICustomAddButtonProps} from "../../types/props";



const CustomAddButton: React.FC<ICustomAddButtonProps> = ({btnColor, title, onHandler, style}) => {

    function colorError (color: string):never|void {
        if(color[0] !== '#') throw new Error('This is not color: "'+color+'". Color should starts with: "#"')
    }

    useEffect(()=> {
        colorError(btnColor)
        //eslint-disable-next-line
    },[])

    return <div
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) =>
            e.currentTarget.style.boxShadow = `${btnColor} 2px 2px 5px`}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
            e.currentTarget.style.boxShadow = ''}
        onClick={onHandler} className={addBtnS.addBtn}
        style={{...style, color: btnColor, border: `1.5px solid ${btnColor}`}}
    >
        <div className={addBtnS.addBtn__plus} style={{background: btnColor}}/>
        <span>{title}</span>
    </div>
}

export default CustomAddButton