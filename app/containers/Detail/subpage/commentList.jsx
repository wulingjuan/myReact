import React ,{Component} from "react";

class CommentList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {data} = this.props;
        return(
            <div className="detail-comment">
                <ul>
                    {   
                        data.length>0 ?
                        data.map((item,key)=>{
                            return <li key={key} style={{height:40}}>{key}</li>
                        })
                        :""
                    }
                </ul>
            </div>
        )
    }
}
export default CommentList;