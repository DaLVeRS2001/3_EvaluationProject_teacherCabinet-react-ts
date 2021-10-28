import React, {useEffect, useState} from "react";
import cSliderS from "./style.module.scss"
import defaultAva from "../../assets/sidebar/anonymous.svg";
import next from "../../assets/next.svg";
import {ICustomSlider} from "../../types/props";



const CustomSlider: React.FC<ICustomSlider> =
    ({
         items,
         skippedItemsCount = 4,
         shownItemCount = 4
     }) => {



    const [currentPage, setCurrentPage] = useState<number>(0),
        totalPages: number = Math.ceil(items.length / skippedItemsCount),
        calc: number = ((100 / shownItemCount) * skippedItemsCount) * currentPage;

        useEffect(()=> {
            setCurrentPage(0)
        }, [skippedItemsCount])

    const controlHandler = (ctrlType: 'next' | 'prev'): void => {
        ctrlType === 'next'
            ? setCurrentPage(currentPage+1)
            : setCurrentPage(currentPage-1)
    }

    return (
        <div className={cSliderS.cSlider}>
            <div className={cSliderS.cSlider__container}>

                <div className={cSliderS.cSlider__wrapper}>
                    <div className={cSliderS.cSlider__list} style={{transform: `translateX(-${calc}%)`}}>
                        {items.map((item, idx)=> <div key={idx}
                            style={{flex: `0 0 ${100/shownItemCount}%`}}
                            className={cSliderS.cSlider__item}
                        >
                            <img src={defaultAva} alt={"Ava"}/>
                            <h5>{item.name}</h5>
                        </div>)}
                    </div>
                </div>

                <img
                    className={cSliderS.cSlider__control} hidden={currentPage+1 === totalPages}  data-control={'next'}
                    onClick={(e)=> controlHandler('next')} src={next} alt="->"
                />
                <img
                    className={cSliderS.cSlider__control} hidden={currentPage===0} data-control={'prev'}
                    onClick={(e)=> controlHandler('prev')} src={next} alt="<-"
                />

            </div>
        </div>
    )
}



export default CustomSlider

