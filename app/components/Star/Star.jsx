import React ,{Component} from "react";
class Star extends Component{
    constructor(props){
        super(props);
        this.state={
            count: this.props.count
        }
    }

    render(){
        return (
            <p className="detail-star-p">
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
            </p>
        )
    }
}
export default Star;