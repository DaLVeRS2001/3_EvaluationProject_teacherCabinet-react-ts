import {combineReducers} from "redux";
import testReducer from "./testReducer";



export const reducers = combineReducers({
	test: testReducer
})

export type RootReducers = ReturnType<typeof reducers>