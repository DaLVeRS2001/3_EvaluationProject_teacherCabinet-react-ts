import {applyMiddleware, createStore} from "redux";
import {reducers} from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(thunk))

// @ts-ignore
window.store = function (){
    return store.getState()
}