import { combineReducers } from "redux";
import problemReducer from "./problemReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers ({
problems:problemReducer,
user:sessionReducer
})
export default rootReducer;