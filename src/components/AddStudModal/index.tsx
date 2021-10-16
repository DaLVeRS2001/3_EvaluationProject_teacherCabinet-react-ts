import React, {useEffect} from "react";
import studModalS from "./style.module.scss"
import close from "../../assets/closeModal.svg"
import ModalInput from "../ModalInput";
import {IStudModalConnectState} from "../../types/reducerTypes/home";
import {RootReducers} from "../../redux/reducers";
import {changeModalInput, resetHomeFields} from "../../redux/action-creators/homeActions";
import {connect} from "react-redux";
import {IAddStudModalProps} from "../../types/props";
import vladForm from "../../hooks/vladForm";
import {isMax, isRequired} from "../../services/validators";
import {TDefaultValidFunc} from "../../types/validators";

const toMax: TDefaultValidFunc= isMax(15)

const AddStudModal: React.FC<IAddStudModalProps> =
    ({studModal, changeModalInput, handlerStudModal, resetHomeFields}) => {

    const {vErrors, handleSub} = vladForm({
        'name': {
            value: studModal.fields.name,
            validation: [isRequired(studModal.fields.name), toMax(studModal.fields.name)]
        },
        'email': {value: studModal.fields.email, validation: [isRequired(studModal.fields.email)]},
    }, );

    const handler = (e: React.MouseEvent<HTMLDivElement>):void => {
        e.target === e.currentTarget && handlerStudModal()
    }

        useEffect(() => {
            return () => resetHomeFields()
            //eslint-disable-next-line
        }, [])

    const onSubmit = () => {
        console.log(studModal.fields)
    }

    return <div className={studModalS.studModal} onClick={handler}>
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>)=> handleSub(e, onSubmit)}
            className={studModalS.studModal__inner}
        >
            <header>
                <h1>Выберите, кого добавить в ученики</h1>
                <img src={close} alt="X" onClick={handlerStudModal}/>
            </header>
            <main>
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
            </main>
            <footer>
                <button>Добавить ученика</button>
            </footer>
        </form>
    </div>
}

const mapStateToProps = (state: RootReducers):IStudModalConnectState => ({
    studModal: state.home.studModal
})

export default connect(mapStateToProps, {changeModalInput, resetHomeFields})(AddStudModal)