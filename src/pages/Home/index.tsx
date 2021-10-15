import homeS from "./style.module.scss"
import MyStudents from "../MyStudents";
import ScheduleTable from "../ScheduleTable";
import {IHomeConnectState} from "../../types/reducerTypes/home";
import {RootReducers} from "../../redux/reducers";
import {getUsers} from "../../redux/action-creators/homeActions";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {IHomeProps} from "../../types/props";
import NoUsers from "../../components/NoUsers";



const Home: React.FC<IHomeProps> = ({getUsers, users}) => {

    useEffect(()=> {
        getUsers()
       //eslint-disable-next-line
    }, [])


    return <div className={homeS.home}>
        <MyStudents/>
        {users.length ? <NoUsers/> :  <ScheduleTable users={users}/>}
    </div>
}


const mapStateToProps = (state: RootReducers):IHomeConnectState => ({
    users: state.home.users
})


export default connect(mapStateToProps, {getUsers})(Home)