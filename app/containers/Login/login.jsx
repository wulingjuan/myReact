import React ,{Component} from "react";
import Header from "../Header/index";
import * as Request from "../../request/request.js";
import * as RequestType from "../../request/index.js";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            state:"",
            desc:""
        }
    }
    componentDidMount(){
        var params = RequestType.getmessage("method","20171211022546546");
        Request.publicMethod(params,function(res){
            console.log(res.data);
        })
    }
    render(){
        return (
            <div>
                <Header title="登录"/>
            </div>
        )
    }
}
export default Login;