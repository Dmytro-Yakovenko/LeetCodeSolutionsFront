import { combineReducers } from "redux";
import problemReducer from "./problemReducer";

const rootReducer = combineReducers ({
problems:problemReducer
})
export default rootReducer;