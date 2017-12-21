import * as actionTypes from "../constants/userinfo";

const initialState = {};

export default function loadmore(state = initialState, action) {
    switch (action.type) {
        // 加载更多
        case 'LOAD_MORE':
            return action.data;
        default:
            return initialState;
    }
}