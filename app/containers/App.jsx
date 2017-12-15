import React ,{Component} from "react";
import {Link} from "react-router-dom";
import fn from "../redux-demo.js";
// fn();
export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p className="header">header</p>
                <div>{this.props.children}</div>
                <p>footer</p>
            </div>
        )
    }
}