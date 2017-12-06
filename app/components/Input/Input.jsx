import React ,{Component} from "react";
import ReactDOM from "react-dom";

export default class Hello extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:''
        }
    }
    inputChange(e){
        this.setState({
            value:e.target.value
        })
    }
    inputKepup(e){
        const value = this.state.value;
        if(e.keyCode == 13 && value.trim()){
            this.props.inputSubmit(value);
            this.setState({
                value:""
            })
        }
    }
    render(){
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.inputChange.bind(this)}
                    onKeyUp={this.inputKepup.bind(this)}
                />
            </div>
        )
    }
}