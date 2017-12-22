const initialState = {};
export default function getCityList(state = initialState,action){
    switch (action.type) {
        case "CITY_LIST":
            return action.data
        default:
            return state;
    }
}