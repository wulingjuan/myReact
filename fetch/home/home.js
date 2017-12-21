import {get} from "../get";

export function getHomeAdData(){
    var result = get('/api/homead');
    return result;
}
export function getListData(city,page) {
    const result = get('/api/homelist/' + city + "/" + page);
    return result;
}
