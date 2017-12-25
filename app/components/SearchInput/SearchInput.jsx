import React, { Component } from "react";

import "./style";

class SearchInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: ""
        }
    }
    inputChangeHandler(e) {
        // 约束性
        this.setState({
            keyword: e.target.value
        })
    }
    inputKeyUpHandler(e) {
        if (e.keyCode == 13) {
            this.searchHandler();
        }
    }
    searchHandler(){
        const url = this.state.keyword;
        this.props.enterHandler(url);
    }
    componentDidMount(){
        // 非约束性
        // 运用ref属性 通过dom获取input value的值
        // console.log(this.refs.input.value)
        // 依赖dom影响性能
        // 设置默认值
        this.setState({
            keyword:this.props.value
        });
    }
    render() {
        return (
            <div className="header-search">
                <i className="icon-search" onClick={this.searchHandler.bind(this)}></i>

                {/* <input type="text" placeholder="请输入关键字" defaultValue="a" ref="input"/> */}
                <input type="text"
                    placeholder="请输入关键字"
                    value={this.state.keyword}
                    onChange={this.inputChangeHandler.bind(this)}
                    onKeyUp={this.inputKeyUpHandler.bind(this)} />
            </div>
        )
    }
}
export default SearchInput;