import React, {useEffect} from "react";
import studModalS from "./style.module.scss"
import ModalInput from "../../ModalInput";
import {IStudModalConnectState} from "../../../types/reducerTypes/home";
import {RootReducers} from "../../../redux/reducers";
import {changeModalInput, requestStudInvitation, resetHomeFields} from "../../../redux/action-creators/homeActions";
import {connect} from "react-redux";
import {IAddStudModalProps} from "../../../types/props";
import vladForm from "../../../hooks/vladForm";
import {isMax, isRequired} from "../../../services/validators";
import {TDefaultValidFunc} from "../../../types/validators";
import CustomModal from "../#CustomModal";


const toMax: TDefaultValidFunc= isMax(15)

const AddStudModal: React.FC<IAddStudModalProps> =
    ({studModal, changeModalInput, handlerStudModal, resetHomeFields, requestStudInvitation}) => {

    const {vErrors, handleSub} = vladForm({
        'name': {
            value: studModal.fields.name,
            validation: [isRequired(studModal.fields.name), toMax(studModal.fields.name)]
        },
        'email': {value: studModal.fields.email, validation: [isRequired(studModal.fields.email)]},
    }, );


        useEffect(() => {
            return () => resetHomeFields()
            //eslint-disable-next-line
        }, [])

    const onSubmit = () => {
            new Promise((res => {
                handlerStudModal()
                res('')
            })).then(()=> requestStudInvitation())
    }

    return<form
            onSubmit={(e: React.FormEvent<HTMLFormElement>)=> handleSub(e, onSubmit)}
        >

            <CustomModal
                modalHandler={handlerStudModal}  btnTitle={'Добавить ученика'}
                headerTitle={'Выберите, кого добавить в ученики'}
            >
                <div className={studModalS.inlineWrapper} >
                    <ModalInput
                        title={'Имя'} type={'text'} name={'name'} ph={'Введите имя ученика'}
                        value={studModal.fields.name} handler={changeModalInput} style={{marginBottom: 10}}
                        fieldError={vErrors.name}
                    />
                    <ModalInput
                        title={'Почта'} type={'email'} name={'email'} ph={'Введите почту'}
                        value={studModal.fields.email} handler={changeModalInput} fieldError={vErrors.email}
                    />
                </div>
            </CustomModal>
        </form>
}

const mapStateToProps = (state: RootReducers):IStudModalConnectState => ({
    studModal: state.home.studModal
})

export default connect(mapStateToProps, {
    changeModalInput, resetHomeFields, requestStudInvitation
})(AddStudModal)