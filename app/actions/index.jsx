import * as actionTypes from "../constants/userinfo";
import { getCityList} from "../../fetch/home/home";
export const login = (data)=>{
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}
export const updateCity = (data) => {
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
}
export const getAd = (data) => {
    return {
        type: actionTypes.GET_AD,
        data
    }
}
export const loadMore = (data) => {
    return {
        type:'LOAD_MORE',
        data
    }
}
// 获取热门城市列表
export const getCity = () => dispatch =>{
    return getCityList().then(res=>res.json())
    .then(json =>{
        dispatch({type:"CITY_LIST",data:json})
    })
}