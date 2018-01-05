import React, { Component } from "react";
import Header from "../Header/index";
import UserInfoHeader from "../../components/userInfo/header";
import OrderList from "./subPage/orderList";
import { hashHistory } from "react-router";
import {connect} from "react-redux";

import "./style.less";

class UserCenter extends Component {
    constructor(props){
        super(props)
        this.state = {
            checking: true,
            username:"",
        }
    }
    doCheck() {
        const username = sessionStorage.getItem("username");
        if (!username) {
            // 登录跳转用户中心
            setTimeout(function() {
                hashHistory.push('/login');
            }, 2000);
        } else {
            // 已登录
            this.setState({
                checking: false,
                username: username,
            })
        }
    }
    loginOut(){
        sessionStorage.removeItem("username");
        hashHistory.push("/");
    }
    componentDidMount(){
        this.doCheck()
    }
    render() {
        const arr=[1,2,3,4]
        return (
            this.state.checking ?
            <div className="login-hint">
                <div className="login-hintText">
                    请先登录
                </div>
            </div> :
            <div>
                <Header title="用户中心"/>
                <UserInfoHeader userName={this.state.username} cityName={this.props.cityinfo.cityName}/>
                <OrderList list={arr}/>
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