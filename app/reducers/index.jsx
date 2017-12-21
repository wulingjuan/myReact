import {combineReducers} from "redux";
import userinfo from "./userinfo";
import cityinfo from "./cityinfo";
import loadmore from "./loadmore";
const rootReducer = combineReducers({
    userinfo,cityinfo,loadmore
});

export default rootReducer;