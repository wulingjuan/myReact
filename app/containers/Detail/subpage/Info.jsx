import React,{Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../../actions/index";
import Star from "../../../components/Star/Star";

class Info extends Component{
    constructor(props){
        super(props);
        const id = this.props.id;
        const { dispatch } = this.props;
        dispatch(actions.detailInfo(id))
    }

    componentDidMount(){
        
    }
    render(){
        const infoData = this.props.detailInfo;
        return (
            <div className="clear-fix detail-info">
                <div className="float-left detail-img">
                    <img src={require(`../imgs/shangjia.png`)} alt=""/>
                </div>
                <div className="float-left detail-allInfo">
                    <h2 className="detail-title">{infoData.title}</h2>
                    <div className="clear-fix detail-star">
                        <Star star={infoData.star}/>
                        <p className="detail-star-price">
                            <span className="price">￥{infoData.price}</span>
                        </p>
                    </div>
                    <div className="detail-subTitle">
                        {infoData.subTitle}
                    </div>
                </div>
                <div style={{clear:"both",height:14,}}></div>
                {/* 设置 innerHTML */}
                <div className="detail-location" dangerouslySetInnerHTML={{ __html: infoData.desc }}></div>
            </div>
        )
    }
}
const mapState = state=>{
    return {
        detailInfo: state.detailInfo
    }
}

export default connect(
    mapState
)(Info)