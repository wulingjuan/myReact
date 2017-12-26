import React ,{Component} from "react";
class Star extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const star = this.props.star;
        const arr = [1,2,3,4,5];
        return (
            <p className="detail-star-p">
                {
                    arr.map((item,key)=>{
                        return <span 
                        className={item <= star ?"icon-star pink":"icon-star"} 
                        key={key}>
                        </span>
                    })
                }
            </p>
        )
    }
}
export default Star;