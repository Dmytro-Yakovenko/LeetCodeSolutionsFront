import { combineReducers } from "redux";
import problemReducer from "./problemReducer";
import sessionReducer from "./sessionReducer";
import tabReducer from "./tabReducer";

const rootReducer = combineReducers ({
problems:problemReducer,
user:sessionReducer,
tab:tabReducer
})
export default rootReducer;