import asideS from "./style.module.scss"

import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";

import logo from "../../assets/sidebar/logo.svg"
import shortLogo from "../../assets/sidebar/logo-short.svg"

import SideItem from "./SideItem";
import CertainData from "../../services/getCertainData";
import {setIsOpenSidebar} from "../../redux/action-creators/appActions";

import {ISidebarConnectState} from "../../types/reducerTypes/app";
import {ISidebarProps} from "../../types/props";
import {RootReducers} from "../../redux/reducers";
import getMedia from "../../services/getMedia";



const Sidebar: React.FC<ISidebarProps> = ({isNeedSize, setIsOpenSidebar}) => {
    const sideItems = new CertainData().getModel().sideItems
    const {maxWidthMedias} = getMedia()



    useEffect(() => {
        window.innerWidth <= maxWidthMedias[1] && setIsOpenSidebar({hidden: true, is: true})
        window.addEventListener('resize', () => {
            const WI = window.innerWidth
            WI <= maxWidthMedias[1]
                ? setIsOpenSidebar({hidden: true, is: true})
                : setIsOpenSidebar({hidden: false, is: false})
        })
        // eslint-disable-next-line
    }, [])

    const onHide = useCallback(() => {
        setIsOpenSidebar({...isNeedSize, hidden: !isNeedSize.hidden})
    }, [isNeedSize, setIsOpenSidebar])

    return <aside data-hidden={isNeedSize.hidden} className={asideS.sidebar}>
        <div>
            <div className={asideS.sidebar__logo}>
                <img src={isNeedSize.hidden ? shortLogo : logo} alt=""/>
            </div>

            {sideItems.map((el, idx) => {
                if (idx > 8) return null;
                return <SideItem key={idx} hidden={isNeedSize} imgPath={el.img} title={el.title}/>
            })}
        </div>

        <div>
            {sideItems.map((el, idx) => {
                if (idx < 9) return null
                if (idx === 9) return <SideItem
                    key={idx} onHide={onHide} hidden={isNeedSize}
                    imgPath={el.img} title={el.title}
                />
                return <SideItem key={idx} hidden={isNeedSize} imgPath={el.img} title={el.title}/>
            })}
        </div>
    </aside>
}

const mapStateToProps = (state: RootReducers): ISidebarConnectState => ({
    isNeedSize: state.app.isOpenSidebar,
})


export default connect(mapStateToProps, {setIsOpenSidebar})(React.memo(Sidebar))