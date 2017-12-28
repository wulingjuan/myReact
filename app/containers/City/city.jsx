import React, { Component } from "react";
import ReactDOM from "react-dom";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import * as actions from "../../actions/index";
// import { getCityList} from "../../../fetch/home/home.js"
import Header from "../Header/index";
import { hashHistory } from "react-router";
import "./style.less";
class City extends Component {
    constructor(props){
        super(props);
        const { dispatch } = this.props;    
        dispatch(actions.getCity());
    }
    
    cityChangeHandler(value){
        const { dispatch } = this.props;
        let cityinfo = this.props.cityinfo;
        cityinfo.cityName = value;
        dispatch(actions.updateCity(cityinfo));
        hashHistory.push('/')
    }
    // 1、改变城市，改变redux
    // 2、存储localstorage当中
    // 3、跳转到首页
    
    // 获取热门城市
    render() {
        const { citylist, cityinfo} =  this.props;
        const hotcity = citylist.hotcity;
        const cityName = cityinfo.cityName;
        return (
            <div id="city">
                <Header title={"选择城市"}/>
                <div className="city-show">{cityName}</div>
                {/* 可以用react本地存储 */}
                <h2>热门城市</h2>
                <div className="city-hot clear-fix">
                    <ul>
                        {hotcity?hotcity.map((item,index) => 
                            <li key={index} onClick={this.cityChangeHandler.bind(this, item)}><span>{item}</span></li>):"暂无数据"
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
const mapState = state => {
    return {
        citylist: state.getCityList,
        cityinfo: state.cityinfo
    };
}

export default connect(
    mapState
)(City);
