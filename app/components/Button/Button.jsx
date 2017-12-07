import React, { Component } from "react";
export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state={
            text:""
        }
        // 事件绑定或者
        // this.clickHandle = this.clickHandle.bind(this);111
    }
    static defaultProps = {
        color: "blue",
        text: "确认"
    }
    clickHandle() {
        // 此处this需要指向this.state的this对象并非事件对象中的this
        this.setState({
            text:"hello world"
        })
    }
    render() {
        const { color, text } = this.props;
        var arr = ["aaa", "bbb", "ccc"];
        return (
            <div>

                {/* <button className={`btn btn-${color}`} onClick={this.clickHandle}>{text}</button>1111 */}
                <button className={`btn btn-${color}`} onClick={this.clickHandle.bind(this)}>{text}</button>
                {/* {5>1?<p>5大于1</p>:<p>1大于5</p>} jsx注释*/}
                <p>{this.state.text}</p>                
                <ul>
                    {arr.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
        )
    }
}