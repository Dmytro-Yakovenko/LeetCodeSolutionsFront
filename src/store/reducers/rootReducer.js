import { combineReducers } from "redux";
import problemReducer from "./problemReducer";
import sessionReducer from "./sessionReducer";
import tabReducer from "./tabReducer";
import chatReducer from "./chatReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers ({
problems:problemReducer,
user:sessionReducer,
tab:tabReducer,
answer:chatReducer, 
modal:modalReducer

})
export default rootReducer;