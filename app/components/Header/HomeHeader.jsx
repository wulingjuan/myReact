import React ,{Component} from "react";
import ReactDOM from "react-dom";
import "./style";
import {Link} from "react-router";
class Header extends Component{
    render(){
        return (
            <div className="clear-fix header">
                <div className="float-left header-city">
                    <Link to="city" style={{color:"#fff"}}>
                        <span>{this.props.cityName}</span>&nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="float-right header-user">
                    <i className="icon-user"></i>
                </div>
                <div className="header-search">
                    <i className="icon-search"></i>
                    <input type="text" placeholder="请输入关键字"/>
                </div>
            </div>
        )
    }
}
export default Header;