import React ,{Component} from "react";
import ReactDOM from "react-dom";

export default class Hello extends Component{
    render(){
        return (
           <div>
                <div>practice makes perfect!</div>
                <p>{this.props.title}</p>
           </div>
        )
    }
}