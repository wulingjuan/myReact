import React ,{Component} from "react";
import ReactDOM from "react-dom";

export default class Hello extends Component{
    render(){
        return (
            <div>
                <p>Detail,url的参数：{this.props.params.id}</p>
            </div>
        )
    }
}