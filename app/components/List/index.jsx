import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

class List extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { data,imgData } = this.props;
        return (
            <div className="home-item">
                <ul>
                    {data.length>0 ? data.map((item,index)=>{
                        return <Link to={`/detail/${item.mumber}`} key={index}><li className="clear-fix home-list-item">
                            <div className="float-left home-list-item-left">
                                <img src={imgData[index]} alt="" />
                            </div>
                            <div className="float-right home-list-item-right">
                                <p className="clear-fix">
                                    <span className="float-left title">{item.title}</span>
                                    <span className="float-right distance">{item.distance}</span>
                                </p>
                                <p>
                                    <span className="subtitle">{item.subTitle}</span>
                                </p>
                                <p className="clear-fix">
                                    <span className="float-left price">￥{item.price}</span>
                                    <span className="float-right mumber">已售{item.mumber}</span>
                                </p>
                            </div>
                        </li></Link>
                    }) : ""}
                </ul>
            </div>
        )
    }
}
export default List