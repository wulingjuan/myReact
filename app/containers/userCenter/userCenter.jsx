import React, { Component } from "react";
import Header from "../Header/index";
import { hashHistory } from "react-router";

import "./style.less";

class UserCenter extends Component {
    constructor(props){
        super(props)
        this.state = {
            checking: true
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
                checking: false
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
        return (
            this.state.checking ?
            <div className="login-hint">
                <div className="login-hintText">
                    请先登录
                </div>
            </div> :
            <div>
                <Header title="用户中心"/>
                <button onClick={this.loginOut.bind(this)}>退出</button>
            </div>
        )
    }
}
export default UserCenter;