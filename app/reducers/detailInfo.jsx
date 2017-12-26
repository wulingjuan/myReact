const initialState = {};
export default function detailInfo(state=initialState,action){
    switch (action.type) {
        case "DETAIL_INFO":
            return action.data
        default:
            return state;
    }
}