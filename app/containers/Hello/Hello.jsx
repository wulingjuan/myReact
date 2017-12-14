import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userinfoActions from "../../actions/index";

import A from "../../components/A";
import B from "../../components/B";
import C from "../../components/C";

class Hello extends Component{
    render(){
        return (
            <div>
                <p>hello world</p>
                <A userinfo={this.props.userinfo}/>
                <B userinfo={this.props.userinfo}/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount(){
        this.props.userinfoActions.login({
            userid:"abc",
            city:"shanghai"
        })
    }
}

const mapStateToProps = (state) => {
    console.log(state.userinfo)
    return {
        userinfo:state.userinfo
    }
}
const mapDispatchToProps = (dispatch) =>{
    // debugger
    return {
        userinfoActions: bindActionCreators(userinfoActions,dispatch)
    }
}

// connent方法连接react组件与react
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);