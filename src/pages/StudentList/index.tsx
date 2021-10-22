import studListS from "./style.module.scss"
import {TUsers} from "../../types/reducerTypes/home"
import CustomSlider from "../../components/CustomSlider";
import getMedia from "../../services/getMedia";
import {useEffect, useState} from "react";
import SearchStudents from "../../components/SearchStudents/SearchStudents";


interface IStudentList{
    students: TUsers
}

const StudentList:React.FC<IStudentList> = ({students}) => {
    const [currentWidth, setCurrentWidth] = useState<number>(0)
    const {maxWidthMedias} = getMedia()


    useEffect(() => {
        setCurrentWidth(window.innerWidth)

        const listener = (): void => {
            const WI = window.innerWidth
            setCurrentWidth(WI)
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




export default StudentList