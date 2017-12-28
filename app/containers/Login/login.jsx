import React ,{Component} from "react";
import Header from "../Header/index";
import * as Request from "../../request/request.js";
import * as RequestType from "../../request/index.js";
import {connect} from "react-redux";
import { hashHistory} from "react-router";
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
            hashHistory.push(router);
        }
        else{
            hashHistory.push('/user');
        }
    }
    componentDidMount() {
        var params = RequestType.getmessage("20171211022546546");
        Request.publicMethod(params,function(res){
            console.log(res.data);
        })
        
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