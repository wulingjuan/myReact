const initialState = {};
export default function goodsList(state = initialState,action){
    switch (action.type) {
        case 'GOODS_LIST':
            return action.data
        default:
            return state
    }
}