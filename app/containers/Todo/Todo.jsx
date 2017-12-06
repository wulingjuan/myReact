import React ,{Component} from "react";
import ReactDOM from "react-dom";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";

export default class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[],
        }
    }
    submitList(value){
        const id = this.state.arr.length;
        // alert(value)
        this.setState({
            arr:this.state.arr.concat({
                id:id,
                text:value,
            })
        })
    }
    deleteList(id){
        this.setState({
            arr:this.state.arr.filter(item=>{
                if(item.id != id){
                    return item
                }
            })
        })
    }
    render(){
        return (
            <div>
                <Input inputSubmit={this.submitList.bind(this)}/>
                <List data={this.state.arr}/>
            </div>
        )
    }
}