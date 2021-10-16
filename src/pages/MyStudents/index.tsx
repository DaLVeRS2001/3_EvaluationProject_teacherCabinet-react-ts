import React, {useState} from "react";
import studS from "./style.module.scss"
import CustomSwitchers from "../../components/CustomSwitchers";
import CustomAddButton from "../../components/CustomAddBtn";
import {IMyStudentsProps} from "../../types/props";


const MyStudents:React.FC<IMyStudentsProps> = ({handlerStudModal}) => {
    const [selectedBlock, setSelectedBlock] = useState<null|string>(null)

    return (
        <div className={studS.student}>
            <div className={studS.student__title}>
                Мои Ученики
            </div>
            <div className={studS.student__switchers}>
                <CustomSwitchers onHandler={(el)=>setSelectedBlock(el)} titles={['Ученики', 'Группы']}/>
                <hr/>
            </div>
            <div className={studS.student__editor}>
                <div className={studS.student__btn}>
                    <CustomAddButton
                        onHandler={()=> handlerStudModal()} btnColor={'#235390'}
                        title={'Добавить ученика'}
                    />
                    <CustomAddButton onHandler={()=> console.log('kek')} btnColor={'#C200AF'} title={'Создать группу'}/>
                </div>
                <div className={studS.student__list}>
                    {
                        selectedBlock === 'Ученики'
                            ? '+ Добавте своего первого ученика'
                            : '+ Добавте свою первую группу'
                    }
                </div>
            </div>
        </div>
    )
}

export default MyStudents