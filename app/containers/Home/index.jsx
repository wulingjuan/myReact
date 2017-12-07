import React ,{Component} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

export default class Hello extends Component{
    render(){
        return (
            <div>
                <p>Home</p>
                <Link to='/list'>to list</Link>
            </div>

        )
    }
}