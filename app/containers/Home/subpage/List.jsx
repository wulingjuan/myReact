import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style";
import {connect} from "react-redux";
import { getListData } from "../../../../fetch/home/home.js";

class List extends Component {
    componentDidMount(){
        this.loadFirstPageData();
        const {dispatch} = this.props;
    }
   
    // 获取首屏数据
    loadFirstPageData(){
        const cityName = this.props.cityName;
        console.log(cityName)
        const result = getListData(cityName,0);        
        this.resultHandle(result);
    }
    // 数据处理函数
    resultHandle(result){
        result.then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data)
        })
    }
    render() {
        return (
            <div id="home-like">
                <h2 className="home-like-title">猜你喜欢</h2>
                
            </div>
        )
    }
}
const mapState = state => state;
export default connect(
    mapState
)(List);