import React,{Component} from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import { hashHistory } from "react-router";
import { connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index";

import "./style.less";


class Search extends Component{
    constructor(props){
        
        super(props);
        this.state={
            data:''
        }
    }
    backClickHandler(){
        window.history.back();
    }
    searchHandler(url) {

        // hashHistory.push("/search/all"+encodeURLComponent(this.state.keyword))
        if(url){
            // hashHistory.push(`/search/all/${url}`);
            this.props.actions.goodsList('url');
            // console.log(this.props.goodsList);
            // this.setState({
            //     data: this.props.goodsList
            // })
        }
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        
        // this.props.actions.goodsList('11')
        // console.log(this.props.goodsList)
        // this.setState({
        //     data:this.props.goodsList
        // })
    }

    componentWillReceiveProps(nextProps){
        const goodsList = nextProps.goodsList.data;

        if(goodsList){
            this.setState({
                data:goodsList
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    render(){
        const keyword = this.props.params.keyword;
        const {data} = this.state;
     
        return (
            <div className="search">
                <div className="search-header">
                    <span className="search-back float-left" onClick={this.backClickHandler.bind(this)}>
                        <i className="icon-chevron-left"></i>
                    </span>
                    <SearchInput enterHandler={this.searchHandler.bind(this)} value={keyword || ""}/>
                </div>
                {
                    data ?
                    data.map(
                         (item,key)=>
                         <div key={key}>{key}</div>
                        )
                    :""
                }
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