import * as actionTypes from "../constants/userinfo";

const initialState = {};

export default function userinfo(state = initialState,action){
    switch (action.type) {
        // 登录
        case "UPDATE_USERINFO":
            return action.data;
        default:
            return state;
    }
}