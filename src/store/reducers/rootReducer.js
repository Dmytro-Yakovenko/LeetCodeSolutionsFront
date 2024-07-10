import { combineReducers } from "redux";
import problemReducer from "./problemReducer";
import sessionReducer from "./sessionReducer";
import tabReducer from "./tabReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers ({
problems:problemReducer,
user:sessionReducer,
tab:tabReducer,
answer:chatReducer

})
export default rootReducer;