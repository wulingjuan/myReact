import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style";
import {connect} from "react-redux";
import { getListData } from "../../../../fetch/home/home.js";
import ListComponent from "../../../components/List/index";
import LoadMore from "../../../components/LoadMore/LoadMore";
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            hasMore: false ,//记录当前状态下，还有没有更多的数据返回
            isLoadingMore:false ,//记录当前状态下，是“加载中”还是“点击加载更多”
            page: 1,//点一下一页的页码
            pageY:1
        }
    }
    componentDidMount(){
        this.loadFirstPageData();
        const {dispatch} = this.props;
    }
   
    // 获取首屏数据
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);        
        this.resultHandle(result);
    }
    loadMorePageData(){
        this.setState({
            isLoadingMore:true
        })
        // 加载下一页的数据
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandle(result);

        // 增加page计数
        this.setState({
            page:page + 1,
            isLoadingMore: false
        })
    }
    // 数据处理函数
    resultHandle(result){
        result.then((res)=>{
            return res.json();
        }).then((json)=>{
            const hasMore = json.hasMore;
            const data = json.data;
            console.log(data)
            this.setState({
                data:this.state.data.concat(data),
                hasMore:hasMore,
            })
        })
    }
    render() {
        const imgData = this.props.data;
        return (
            <div id="home-like">
                <h2 className="home-like-title">猜你喜欢</h2>
                {
                    this.state.data.length ? 
                    <ListComponent data={this.state.data} imgData={imgData}/>: 
                    <div>加载中...</div>
                }
                {
                    this.state.hasMore?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMorePageData.bind(this)} loadImgMoreFn={this.props.getListInfo.bind(this)} page={this.state.pageY}/>:
                    <div></div>
                }
            </div>
        )
    }
}
const mapState = state => state;
export default connect(
    mapState
)(List);