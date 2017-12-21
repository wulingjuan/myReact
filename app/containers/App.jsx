import React ,{Component} from "react";
import Home from "../containers/Home/index";
import "../static/css/common";
import "../static/css/font";
import localStore from "../util/localStore.js";
import { CITYNAME } from "../config/localStorageCityName.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userInfoActionsOtherFiles from "../actions/index";
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            initDone: false
        }
    }
    componentDidMount() {
        let cityName;
        cityName = localStore.getItem(cityName);
        if (cityName == null) {
            cityName = "北京";
        }
        //将城市信息存储到redux 
        this.props.userInfoActions.updateCity({
            cityName: "深圳",
            cityLocation: "南方"
        })
        setTimeout(() => {
            this.setState({
                initDone: true
            })
        }, 1000);

    }
    render(){
        return (
            <div>
                {this.state.initDone ? this.props.children : <div>加载中...</div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsOtherFiles, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)