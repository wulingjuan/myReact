import React ,{Component} from "react";
import ReactDOM from "react-dom";
import Header from "../Header/index";
import Info from "./subpage/Info";
import CommentList from "./subpage/commentList";
import {getComment} from "../../../fetch/home/home.js";
import LoadMore from "./subpage/LoadMore";

import "./style.less";

class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            page:0,
            hasMore:false,
            isLoading:false
        }
    }
    LoadData(){
        this.setState({
            isLoading:true
        })
        console.log(this.state.page)
        const id = this.props.params;
        const page = this.state.page;
        const result = getComment(id,page);
        
        result.then(res=>res.json()
            .then(json=>{
                console.log(json)
                this.setState({
                    data:json.data.concat(this.state.data),
                    page:this.state.page+1,
                    hasMore:json.hasMore,
                    isLoading:false
                })
            })
        )
    }
    componentDidMount(){
        this.LoadData()
    }
    render(){
        const {id} = this.props.params;
        const { data, hasMore, isLoading} = this.state;
        return (
            <div id="detail">
                <Header title={"商品详情"}/>
                <Info id={id}/>
                <CommentList data={data} />
                {
                    hasMore ?
                    <LoadMore loadMoreFn={this.LoadData.bind(this)} isLoading={isLoading} />:
                    <div style={{ padding: 10, textAlign: "center", color: "#666" }}>暂无更多数据</div>
                }
                
            </div>
        )
    }
}
export default Detail;