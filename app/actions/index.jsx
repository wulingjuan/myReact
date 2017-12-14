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