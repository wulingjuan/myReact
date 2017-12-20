import {combineReducers} from "redux";
import userinfo from "./userinfo.jsx";
import cityinfo from "./cityinfo.jsx";

const rootReducer = combineReducers({
    userinfo,cityinfo
});

export default rootReducer;