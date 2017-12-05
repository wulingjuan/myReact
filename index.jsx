import React ,{Component} from "react";
import ReactDOM from "react-dom";
class Button extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        color: "blue",
        text: "确认"
    }
    render() {
        const { color, text } = this.props;
        return (
             <button className={`btn btn-${color}`}>{text}</button>
        )
    }
}
// export default Button;
ReactDOM.render(
    <Button/>,
    document.getElementById("root")
)