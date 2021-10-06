import {combineReducers} from "redux";
import testReducer from "./testReducer";
import appReducer from "./appReducer";



export const reducers = combineReducers({
	test: testReducer,
	app: appReducer
})

export type RootReducers = ReturnType<typeof reducers>