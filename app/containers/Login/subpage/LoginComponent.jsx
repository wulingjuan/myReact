import React,{Component} from "react";
import { browserHistory } from "react-router"; 


class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            phoneNumber:"",
            psd:"",
            errText:""
        }
    }
    phoneChangeHandler(e){
        this.setState({
            errText:""
        })
        const phoneNumber = e.target.value;
        this.setState({
            phoneNumber: phoneNumber
        })
    }
    psdChangeHandler(e){
        this.setState({
            errText: ""
        })
        const psd = e.target.value;
        this.setState({
            psd: psd
        })
    }
    loginClickHandler(e){
        const phoneNumber = this.state.phoneNumber;
        // console.log(phoneNumber)
        const psd = this.state.psd;
        var phoneReg = /^[1]{1}[0-9]{10}$/;
        if(!phoneNumber){
            this.setState({
                errText: "请输入手机号"
            })
            return
        }
        if (!phoneReg.test(phoneNumber)){
            this.setState({
                errText:"请输入正确的手机号"
            })
            return
        }
        if (!psd) {
            this.setState({
                errText: "请输入密码"
            })
            return
        }
        // 此处省略返回密码比较的接口调用


        this.props.loginClickHandler(phoneNumber)
    }
    render(){
        return (
            <div className="login">
                <p className="login-phone">
                    <label htmlFor="phoneNumber">
                        <span className="icon-tablet"></span>
                    </label>
                    <input type="text" id="phoneNumber" onChange={this.phoneChangeHandler.bind(this)} placeholder="请输入手机号" maxLength={11}/>
                </p>
                <p>
                    <label htmlFor="password">
                        <span className="icon-key"></span>
                    </label>
                    <input type="password" id="password" onChange={this.psdChangeHandler.bind(this)} placeholder="请输入密码"/>
                </p>
                <button className="login-btn" onClick={this.loginClickHandler.bind(this)}>登录</button>
                <p className="login-error" style={{display:this.state.errText?"block":"none"}}>{this.state.errText}</p>
            </div>
        )
    }
}
export default LoginComponent;