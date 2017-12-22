import {combineReducers} from "redux";
import userinfo from "./userinfo";
import cityinfo from "./cityinfo";
import loadmore from "./loadmore";
import getCityList from "./getCityList";

const rootReducer = combineReducers({
    userinfo, 
    cityinfo, 
    loadmore, 
    getCityList
});

export default rootReducer;