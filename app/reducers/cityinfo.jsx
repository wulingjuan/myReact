import * as actionTypes from "../constants/userinfo";
import { handleActions, combineActions } from 'redux-actions'
import { login, updateCity} from "../actions/index.js"

const initialState = {};

export default function cityinfo(state = initialState, action) {
    switch (action.type) {
        // 登录
        case actionTypes.USERINFO_LOGIN:
            return action.data;
        // 修改城市 
        case actionTypes.UPDATE_CITYNAME:
            return action.data;       
        default:
            return state;
    }
}


// const reducer = handleActions({
    //     USERINFO_LOGIN:(state,action)=> {
        //         console.log(action.data)
        //         debugger
        //         return action.data
        //     },
        //     UPDATE_CITYNAME: (state, action) => action.data
        // }, defaultState);
        
// const defaultState = {};
// const reducer = handleActions({
//     [combineActions(login, updateCity)](state, { payload: { data } }) {
//         console.log(data)
//         debugger
//         return { ...state, data };
//     }
// }, defaultState);
// export default reducer;