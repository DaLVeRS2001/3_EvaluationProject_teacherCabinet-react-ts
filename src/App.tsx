import React from 'react';
import './styles/App.scss';
import {Routes} from "./Routes";
import Sidebar from "./components/Sidebar";
import {useTypedSelector} from "./hooks/useTypedSelector";

function App() {
    const isOpenSidebar = useTypedSelector(state => state.app.isOpenSidebar)
    return (
        <div data-hidden={`${isOpenSidebar.is} ${isOpenSidebar.hidden}`} className="App">
            <Sidebar/>
            <Routes/>
        </div>
    );
}

export default App;
