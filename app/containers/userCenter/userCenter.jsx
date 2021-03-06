import React, { Component } from "react";
import Header from "../Header/index";
import UserInfoHeader from "../../components/userInfo/header";
import OrderList from "./subPage/orderList";
import { browserHistory } from "react-router";
import {connect} from "react-redux";
import * as http from "../../../fetch/home/home.js";

import "./style.less";

class UserCenter extends Component {
    constructor(props){
        super(props)
        this.state = {
            checking: true,
            arr:[],
            arrImg:[],
        }
    }
    doCheck() {
        const username = sessionStorage.getItem("username");
        if (!username) {
            // 登录跳转用户中心
            setTimeout(function() {
                browserHistory.push('/login');
            }, 2000);
        } else {
            // 已登录
            this.setState({
                checking:false,
            })
        }
    }
    loginOut(){
        sessionStorage.removeItem("username");
        browserHistory.push("/");
    }
    componentDidMount(){
        let arrData = [];
        let str = '';
        this.doCheck();
        const username = sessionStorage.getItem("username");
        http.getOrderList(username).then(res=>res.json())
            .then(json=>{
                // console.log(json)
                for(var i=0;i<json.length;i++){
                    str = require(`${json[i].img}`);
                    arrData.push(str)
                }
                this.setState({
                    arr:json,
                    arrImg:arrData
                })
        })
    }
    render() {
        const { arr, arrImg, checking} = this.state;
        return (
            checking ?
            <div className="login-hint">
                <div className="login-hintText">
                    请先登录
                </div>
            </div> :
            <div>
                <Header title="用户中心"/>
                <UserInfoHeader userName={this.state.username} cityName={this.props.cityinfo.cityName}/>
                <div style={{height:15}}></div>
                <OrderList list={arr} imgList={arrImg}/>
                {/* <button onClick={this.loginOut.bind(this)}>退出</button> */}
            </div>
        )
    }
}
const mapState = state=>{
    return {
        cityinfo: state.cityinfo
    }
}
export default connect(
    mapState
)(UserCenter);