import React from "react";
import invitModalS from "./style.module.scss"
import {requestStudInvitation} from "../../../redux/action-creators/homeActions";
import {connect} from "react-redux";
import CustomModal from "../#CustomModal";
import {IInviSuccessModalProps} from "../../../types/props";
import smile from "../../../assets/smile.svg"





const InvitationSuccessModal: React.FC<IInviSuccessModalProps> =
    ({requestStudInvitation}) => {


    return <div className={invitModalS.invitModal}>
        <CustomModal
            modalHandler={requestStudInvitation}   btnTitle={'Перейти к уроку'}
            headerTitle={'Приглашение отправлено'}
        >
                <img src={smile} alt=":)"/>
                <div>Ученику направлено письмо на электронную почту с данными для входа (регистрации).</div>

        </CustomModal>
    </div>
}

export default connect(null, {
    requestStudInvitation
})(InvitationSuccessModal)