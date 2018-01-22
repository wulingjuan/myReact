import React ,{Component} from "react";
import Header from "../Header/index";
import {connect} from "react-redux";
import { browserHistory} from "react-router";
import LoginComponent from "../../containers/Login/subpage/LoginComponent";
import * as actions from "../../actions/index";


import "./style.less";

class Login extends Component{
    constructor(props){
        super(props);
    }
    
    // 登录成功之后的处理
    loginHandler(username) {
        // 存储用户名
        const {dispatch} = this.props;
        let userinfo =  this.props.userinfo;
        userinfo.username = username;
        dispatch(actions.update({
            username:username
        }));
        sessionStorage.setItem("username",username);
        // 跳转链接
        // const params = this.props.params;
        // const router =  params.router;
        const router = "/user"
        if(router){
            // 跳转到之前跳过来的页面
            browserHistory.push(router);
        }
        else{
            browserHistory.push('/user');
        }
    }
    componentDidMount() {
        
    }
    render(){
        return (
            <div id="login">
                <Header title="登录" />
                <LoginComponent loginClickHandler={this.loginHandler.bind(this)}/>
            </div>
        )
    }
}
const mapState = state=>{
    return {
        userinfo: state.userinfo
    }
}
export default connect(
    mapState
)(Login);