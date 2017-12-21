import React,{Component} from "react";
import {getHomeAdData} from "../../../../fetch/home/home.js";
import "./style";
import {connect} from "react-redux";

class Ad extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    render(){
        const imgList = this.props.data;
        return(
            <div id="home-ad">
                <ul className="clear-fix">
                    {imgList.map((item,key)=><li key={key}><img src={item} alt=""/></li>)}
                </ul>
            </div>
        )
    }
}
export default Ad;