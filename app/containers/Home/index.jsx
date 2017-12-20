import React, { Component } from "react";
import HomeHeader from "../../components/Header/HomeHeader";
import Category from "../../components/Category/Category";
import Ad from "../Home/subpage/Ad";
import List from "../Home/subpage/List";
// import fn from "../redux-demo.js";
// fn();
import {connect} from "react-redux";
const adLists = ["./imgs/ad/car.png", "./imgs/ad/movie.png", "./imgs/ad/summer.png", "./imgs/ad/hot_sell.png", "./imgs/ad/piano.png", "./imgs/ad/go_abroad.png"]
var arr = []
var a = "";
for (var i = 0; i < adLists.length; i++) {
    (function(i){
        a = require(`${adLists[i]}`)
        arr.push(a)
    })(i)
}
class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.cityInfo.cityName} />
                <Category />
                <div style={{height:15}}></div>
                <Ad arr={arr}/>
                <List cityName={this.props.cityInfo.cityName}/>
                <div style={{ height: 15 }}></div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cityInfo: state.cityinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)