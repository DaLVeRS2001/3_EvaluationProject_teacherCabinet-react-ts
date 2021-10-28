import {combineReducers} from "redux";
import testReducer from "./testReducer";
import appReducer from "./appReducer";
import homeReducer from "./homeReducer";
import scheduleReducer from "./scheduleReducer";



export const reducers = combineReducers({
	test: testReducer,
	app: appReducer,
	home: homeReducer,
	schedule: scheduleReducer
})

export type RootReducers = ReturnType<typeof reducers>