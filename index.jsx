import React ,{Component} from "react";
import ReactDOM from "react-dom";

class Button extends Component {
    constructor(props) {
        super(props);
        // 事件绑定或者
        // this.clickHandle = this.clickHandle.bind(this);111
    }
    static defaultProps = {
        color: "blue",
        text: "确认"
    }
    clickHandle(){
        // 此处this需要指向this.state的this对象并非事件对象中的this
        alert('11');
    }
    render() {
        const { color, text } = this.props;
        var arr = ["aaa","bbb","ccc"];
        return (
            <div>

                {/* <button className={`btn btn-${color}`} onClick={this.clickHandle}>{text}</button>1111 */}
                <button className={`btn btn-${color}`} onClick={this.clickHandle.bind(this)}>{text}</button>
                {/* {5>1?<p>5大于1</p>:<p>1大于5</p>} jsx注释*/}
                <p style={{color:true?"deeppink":"#333"}}>you are so beautiful!</p>
                <ul>
                    {arr.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>

        )
    }
}
// export default Button;
ReactDOM.render(
    <Button/>,
    document.getElementById("root")
)