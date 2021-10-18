import homeS from "./style.module.scss"
import MyStudents from "../MyStudents";
import ScheduleTable from "../ScheduleTable";
import {IHomeConnectState} from "../../types/reducerTypes/home";
import {RootReducers} from "../../redux/reducers";
import {getUsers, handlerStudModal} from "../../redux/action-creators/homeActions";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {IHomeProps} from "../../types/props";
import NoUsers from "../../components/NoUsers";
import AddStudModal from "../../components/Modals/AddStudModal";
import InvitationSuccessModal from "../../components/Modals/InvitationSuccessModal";



const Home: React.FC<IHomeProps> =
    ({getUsers, handlerStudModal, users, isStudModalOn, invitFetched}) => {

    useEffect(()=> {
        getUsers()
       //eslint-disable-next-line
    }, [])

    return <div className={homeS.home}>
        {invitFetched && <InvitationSuccessModal/>}
        {isStudModalOn && <AddStudModal handlerStudModal={handlerStudModal}/>}
        <MyStudents handlerStudModal={handlerStudModal}/>
        {!users.length ? <NoUsers handlerStudModal={handlerStudModal}/> :  <ScheduleTable users={users}/>}
    </div>
}


const mapStateToProps = (state: RootReducers):IHomeConnectState => ({
    users: state.home.users,
    isStudModalOn: state.home.studModal.isOn,
    invitFetched: state.home.studModal.invitFetched
})


export default connect(mapStateToProps, {getUsers, handlerStudModal})(Home)