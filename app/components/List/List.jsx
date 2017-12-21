import React ,{Component} from "react";
import ReactDOM from "react-dom";

class List extends Component{
    constructor(props){
        super(props);
    }
    clickHandler(id){
        this.props.deleteList(id);
    }

    render(){
        const {data} = this.props;
        return (
            <div>
                <ul>
                    {data.map((item,index)=>(<li key={index} onClick={this.clickHandler.bind(this,item.id)}>{item.text}</li>))}
                </ul>
            </div>
        )
    }
}
export default List;