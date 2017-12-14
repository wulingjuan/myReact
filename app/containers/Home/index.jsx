import React ,{Component} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";


export default class Hello extends Component{
    render(){
        return (
            <div>
                <p>Home</p>
                <p><Link to='/list'>to list</Link></p>
                <p><Link to='/hello'>to Hello</Link></p>
            </div>
        )
    }

}