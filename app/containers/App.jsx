import React ,{Component} from "react";
import {Link} from "react-router-dom";

export default class App extends Component{
    render(){
        return (
            <div>
                <p>header</p>
                <div>{this.props.children}</div>
                <p>footer</p>
            </div>
        )
    }
}