import React, { Component } from "react";
import HomeHeader from "../../components/Header/HomeHeader";
import Category from "../../components/Category/Category";
import Ad from "../Home/subpage/Ad";
import List from "../Home/subpage/List";
import { getHomeAdData } from "./../../../fetch/home/home.js";
import { getListData } from "./../../../fetch/home/home.js";
import * as actions from "../../actions/index";
// import fn from "../redux-demo.js";
// fn();
import {connect} from "react-redux";
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            dataLsit:[]
        }
    }
    componentDidMount(){
        this.getAdInfo();
        this.getListInfo();
    }
    getAdInfo(){
        const result = getHomeAdData();
        result.then(data => {
            return data.json();
        }).then(json => {
            const adLists = json;
            var arr = [];
            var str = "";
            for (var i = 0; i < adLists.length; i++) {
                (function (i) {
                    str = require(`${adLists[i].img}`);
                    arr.push(str)
                })(i)
            }
            this.setState({
                data: arr
            })
        })
    }
    getListInfo(){
        const page = this.props.loadmore.page;
        const result = getListData(this.props.cityInfo.cityName,0);
        result.then(data => {
            return data.json();
        }).then(json => {
            const adLists = json.data;
            var arr = [];
            var str = "";
            for (var i = 0; i < adLists.length; i++) {
                (function (i) {
                    str = require(`${adLists[i].img}`);
                    arr.push(str)
                })(i)
            }
            this.setState({
                dataLsit: this.state.dataLsit.concat(arr)
            })
        })
    }
    render() {
        const data = this.state.data;
        const dataLsit = this.state.dataLsit;
        return (
            <div>
                <HomeHeader cityName={this.props.cityInfo.cityName} />
                <Category />
                <div style={{height:15}}></div>
                <Ad data={data}/>
                <List cityName={this.props.cityInfo.cityName} data={dataLsit} getListInfo={this.getListInfo.bind(this)}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cityInfo: state.cityinfo,
        loadmore:state.loadmore,
        city:state
    }
}
export default connect(
    mapStateToProps,
)(Home)