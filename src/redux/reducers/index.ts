import {combineReducers} from "redux";
import testReducer from "./testReducer";
import appReducer from "./appReducer";
import homeReducer from "./homeReducer";



export const reducers = combineReducers({
	test: testReducer,
	app: appReducer,
	home: homeReducer
})

export type RootReducers = ReturnType<typeof reducers>