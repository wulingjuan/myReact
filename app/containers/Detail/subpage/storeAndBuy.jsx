import React ,{Component} from "react";
import {hashHistory} from "react-router";

class StoreAndBuy extends Component{
    constructor(props){
        super(props);
        this.state = {
            isStore:false
        }
    }
    componentDidMount(){

    }
    storeHandler(){
        this.setState({
            isStore: true
        })
    }
    buyHandler(){
    //    hashHistory.push("/buy"); 
    }
    render(){
        return ( 
            <div className="storeAndBuy clear-fix">
                <div className="float-left">
                    {   
                        this.state.isStore ? 
                        <button>已收藏</button>:
                        <button onClick={this.storeHandler.bind(this)}>收藏</button>
                    }
                </div>
                <div className="float-right">
                    <button onClick={this.buyHandler.bind(this)}>购买</button>
                </div>
            </div>
        )
    }
}
export default StoreAndBuy;