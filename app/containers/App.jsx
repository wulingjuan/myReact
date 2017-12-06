import React ,{Component} from "react";

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