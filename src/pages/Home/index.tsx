import homeS from "./style.module.scss"
import MyStudents from "./MyStudents";




const Home = () => {

    return <div className={homeS.home}>
        <MyStudents/>
    </div>
}


export default Home