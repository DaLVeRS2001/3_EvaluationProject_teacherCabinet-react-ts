import studListS from "./style.module.scss"
import {TUsers} from "../../types/reducerTypes/home";


interface IStudentList{
    students: TUsers
}

const StudentList:React.FC<IStudentList> = ({students}) => {



    return <div className={studListS.studentList}>
        {
            !students.length
                ? <span> + Добавте своего первого ученика</span>
                : <span>kek</span>
        }
    </div>
}




export default StudentList