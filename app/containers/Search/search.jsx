import React,{Component} from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import { browserHistory } from "react-router";
import { connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index";
import LoadMore from "../../components/LoadMore/LoadMore";
import List from "../../components/List/index";
import "./style.less";


class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            imgData:[],
            data:[]
        }
    }
    backClickHandler(){
        window.history.back();
    }
    searchHandler(url) {
        if(url){
            this.props.actions.goodsList(url);
        }
    }
    componentDidMount(){
        const url = this.props.params.keyword || this.props.params.category;
        this.searchHandler(url);
        const goodsList = this.props.goodsList;
        const arr = [];
        for (var i = 0; i < goodsList.length; i++) {
            (function (i) {
                const str = require(`${goodsList[i].img}`);
                arr.push(str);
            })(i)
        }
        this.setState({
            // data:this.props.goodsList,
            imgData: arr
        })
    }
    componentWillReceiveProps(nextProps,nextState){
        const goodsList = nextProps.goodsList;
        const arr = [];
        for(var i=0;i<goodsList.length;i++){
            (function(i){
                const str = require(`${goodsList[i].img}`);
                arr.push(str);
            })(i)
        }
        this.setState({
            imgData:arr
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    render(){
        const keyword = this.props.params.keyword || this.props.params.category;
        const {imgData} = this.state;
        const data = this.props.goodsList;
        return (
            <div className="search">
                <div className="search-header">
                    <span className="search-back float-left" onClick={this.backClickHandler.bind(this)}>
                        <i className="icon-chevron-left"></i>
                    </span>
                    <SearchInput enterHandler={this.searchHandler.bind(this)} value={keyword || ""}/>
                </div>
                <List data={data} imgData={imgData}/>
                <div style={{padding:10,textAlign:"center",color:"#666"}}>暂无更多数据</div>
            </div>
        )
    }
}
const mapState = state => {
    return {
        goodsList:state.goodsList
    }
}

const mapDispatch = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(
    mapState,
    mapDispatch
)(Search);