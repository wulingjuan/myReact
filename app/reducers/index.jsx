import {combineReducers} from "redux";
import userinfo from "./userinfo";
import cityinfo from "./cityinfo";
import loadmore from "./loadmore";
import getCityList from "./getCityList";
import goodsList from "./goodsList";


const rootReducer = combineReducers({
    userinfo, 
    cityinfo, 
    loadmore, 
    getCityList,
    goodsList
});

export default rootReducer;