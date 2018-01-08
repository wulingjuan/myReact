import {get} from "../get";

export function getHomeAdData(){
    var result = get('/api/homead');
    return result;
}
export function getListData(city,page) {
    const result = get('/api/homelist/' + city + "/" + page);
    return result;
}
export function getCityList(){
     const result = get('/api/city');
     return result;
}
export function getGoodsList(keyword){
    const result = get('/api/goodslist/' + keyword);
    return result;
}   
export function getDetailInfo(id) {
    const result = get('/api/detailInfo/' + id);
    return result;
} 
// 获取评价列表
export function getComment(id,page) {
    const result = get('/api/comment/' + id + '/' + page);
    return result;
} 
// 获取订单列表
export function getOrderList(username) {
    const result = get('/api/orderlist/' + username);
    return result;
} 
