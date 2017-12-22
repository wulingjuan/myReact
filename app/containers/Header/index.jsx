import React,{ Component } from "react";
import "./style.less";


class Header extends Component{
    constructor(props){
        super(props)
    }
    backHandle(){
        window.history.back(); 
    } 
    render(){
        return (
            <div className="city-select">
                <span className="city-select-icon float-left" onClick={this.backHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
export default Header;