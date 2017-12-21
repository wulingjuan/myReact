import * as actionTypes from "../constants/userinfo";
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