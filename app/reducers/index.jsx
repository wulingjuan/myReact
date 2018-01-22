import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import userinfo from "./userinfo";
import cityinfo from "./cityinfo";
import loadmore from "./loadmore";
import getCityList from "./getCityList";
import goodsList from "./goodsList";
import detailInfo from "./detailInfo";

const rootReducer = combineReducers({
    userinfo, 
    cityinfo, 
    loadmore, 
    getCityList,
    goodsList,
    detailInfo,
    form:formReducer 
});

export default rootReducer;