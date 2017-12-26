import React ,{Component} from "react";
import Star from "../../../components/Star/Star";

class CommentList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {data} = this.props;
        return(
            <div className="detail-comment">
                <h2>用户点评</h2>
                <ul>
                    {   
                        data.length>0 ?
                        data.map((item,key)=>{
                            return <li key={key} className="comment-item">
                                    <p>
                                        <span className="icon-user">
                                        </span><span>{item.username}</span>
                                    </p>
                                    <Star star={item.star}/>
                                    <p>{item.comment}</p>
                                </li>
                        })
                        :<div>111</div>
                    }
                </ul>
            </div>
        )
    }
}
export default CommentList;