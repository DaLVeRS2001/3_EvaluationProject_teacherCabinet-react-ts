import studListS from "./style.module.scss"
import {TUsers} from "../../types/reducerTypes/home"
import CustomSlider from "../../components/CustomSlider";
import getMedia from "../../services/getMedia";
import {useEffect, useState} from "react";
import SearchStudents from "../../components/SearchStudents/SearchStudents";
import {RootReducers} from "../../redux/reducers";
import {IStudentListConnectState} from "../../types/reducerTypes/app";
import {connect} from "react-redux";
import {setAppCurrentWidth} from "../../redux/action-creators/appActions";


interface IStudentList{
    setAppCurrentWidth: (width: number)=> void
    currentWidth: number
    students: TUsers
}

const StudentList:React.FC<IStudentList> = ({students, currentWidth, setAppCurrentWidth}) => {


    useEffect(() => {
        setAppCurrentWidth(window.innerWidth)

        const listener = (): void => {
            const WI = window.innerWidth
            setAppCurrentWidth(WI)
        }
        window.addEventListener('resize', listener)

        return () =>
            window.removeEventListener('resize', listener)
        // eslint-disable-next-line
    }, [])


    return <div className={studListS.studentList}>
        {
            !students?.length
                ? <span> + Добавте своего первого ученика</span>
                : currentWidth <= 400
                    ? <SearchStudents students={students}/>
                : (currentWidth > 900 && currentWidth <= 1000)
                    ? <CustomSlider shownItemCount={2}  skippedItemsCount={2} items={students}/>
                : (currentWidth > 400 && currentWidth <= 1150)
                    ? <CustomSlider shownItemCount={3}  skippedItemsCount={3} items={students}/>
                : <CustomSlider items={students}/>
        }
    </div>
}


const mapStateToProps = (state: RootReducers): IStudentListConnectState => ({
    currentWidth: state.app.currentWidth
})

export default connect(mapStateToProps, {setAppCurrentWidth})(StudentList)