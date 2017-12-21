import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.less";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index"

class LoadMore extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:1
        }
    }
    componentDidMount(){
        
    }
    loadMoreHandler(){
        this.props.actions.loadMore({
            page: this.state.page
        })
        this.props.loadMoreFn();
        this.props.loadImgMoreFn()
        this.setState({
            page:this.state.page + 1
        })
    }
    render() {
        return (
            <div className="load-more" >
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandler.bind(this)}>加载更多</span>}
            </div>
        )
    }
}
const mapState = (state) => state;
const mapDispatch = dispatch =>{
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapState,mapDispatch)(LoadMore);