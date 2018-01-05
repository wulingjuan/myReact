import React, { Component } from "react";

class OrderList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {list} = this.props;
         return (
            <div>
                {
                    list.length>0 ?
                    list.map((item,key) =>{
                        return <div key={key}>{key}</div>
                    }) :
                    null
                }
            </div>
        )
    }
}
export default OrderList;