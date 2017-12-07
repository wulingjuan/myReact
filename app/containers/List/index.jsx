import React ,{Component} from "react";
import ReactDOM from "react-dom";
import {browserHistory} from "react-router";

export default class Hello extends Component{
    clickHander(value){
        browserHistory.push('/detail/' + value);
    }
    render(){
        const arr = [1,2,3];
        return (
            <div>
                {arr.map((item,index) => (<p key={index} onClick={this.clickHander.bind(this, item)}>jump to {item}</p>))}
            </div>
        )
    }
}