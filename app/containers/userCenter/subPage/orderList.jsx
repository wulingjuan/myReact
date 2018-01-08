import React, { Component } from "react";
import {hashHistory} from "react-router";
import "./style.less";


class OrderList extends Component {
    constructor(props){
        super(props);
    }
    commentHandler(id){
        hashHistory.push("comment/"+ encodeURIComponent(id));
    }
    render() {
        const {list,imgList} = this.props;
         return (
            <div className="user-orderList">
                <h1>您的订单</h1>
                {
                    list.length>0 ?
                    list.map((item,key) =>{
                        return <div key={key} className="orderList-item clear-fix">
                            <div className="orderList-img float-left">
                                <img src={imgList[key]} alt="" style={{width:100,height:80}}/>
                            </div>
                            <div className="orderList-info float-left">
                                <p>商户：{item.title}</p>
                                <p>数量：{item.count}</p>
                                <p>价格：￥{item.price}</p>
                            </div>
                            <div className="orderList-btn float-right">
                                {
                                    item.commentState ?
                                    <button className="comment_al">已评价</button>:
                                    <button className="comment_no" onClick={this.commentHandler.bind(this, item.id)}>立即评价</button>
                                }
                            </div>
                        </div>
                    }) :
                    null
                }
            </div>
        )
    }
}
export default OrderList;