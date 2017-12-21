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
        const loadMoreFn = this.props.loadMoreFn;
        const loadImgMoreFn = this.props.loadImgMoreFn;
        const wrapper = this.refs.wrapper;
        let timer;
        function callback(){
            // getBoundingClientRect() 获取离屏幕的距离
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height;
            if(top && top < windowHeight){
                loadMoreFn();
                loadImgMoreFn();
            }
        }
        window.addEventListener("scroll",function(){
            if(this.props.isLoadingMore){
                return
            }
            // 截流，使得性能消耗降低，也就是每次判断不在滚动里面进行，及50毫秒执行一次而是在callback函数进行
            // 降低损耗，定时器不会阻止事件进行，所以当50ms之后滚动没有接着进行，则不会一直执行callback函数
            if(timer){
                clearTimeout(timer)
            }
            console.log(123)
            timer = setTimeout(callback,50)
        }.bind(this),false)
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
            <div className="load-more" ref="wrapper">
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