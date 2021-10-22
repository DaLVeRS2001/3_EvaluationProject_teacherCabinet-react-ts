import React, {useState} from "react";
import searchStudS from "./style.module.scss";

import search from "../../assets/search.png"
import defaultAva from "../../assets/sidebar/anonymous.svg";
import arrow from "../../assets/arrow.svg";
import {TCommonUsers} from "../../types/reducerTypes/home";

interface ISearchStudents{
    students: TCommonUsers
}

const SearchStudents: React.FC<ISearchStudents> = ({students}) => {
    const [allStudents, showAllStudents] = useState<boolean>(false),
        [fieldVal, fillField] = useState<string>('');

    const copyStudents:TCommonUsers  = [...students].filter(el=> el.name.includes(fieldVal))


    return (
        <div className={searchStudS.searchStud}>
            <div className={searchStudS.searchStud__search}>
                <img src={search} alt="🔍"/>
                <input
                    onInput={(e: React.FormEvent<HTMLInputElement>)=> fillField(e.currentTarget.value)}
                    value={fieldVal} placeholder="Найти ученика ..."
                    type="text"
                />
            </div>
            <div className={searchStudS.searchStud__list}>
                {
                    copyStudents.map((student, idx)=> {
                        const template = <div key={idx} className={searchStudS.searchStud__item}>
                            <img src={defaultAva} alt={"Ava"}/>
                            <h5>{student.name}</h5>
                        </div>
                        if(!allStudents && idx <= 5) return template
                        if(allStudents) return template
                    })
                }
            </div>
            <img
                hidden={!copyStudents.length}
                src={arrow} alt="↓" className={searchStudS.searchStud__arrow}
                onClick={()=> showAllStudents(!allStudents)} style={{transform: allStudents?"scale(-1)":"scale(1)"}}
            />
        </div>
    )
}

export default SearchStudents