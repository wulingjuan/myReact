import React, { Component } from "react";
import Header from "../Header/index";
import CommentStar from "./subpage/CommentStar/CommentStar";
import {hashHistory} from "react-router";
import "./style.less";


class Comment extends Component {
    constructor(props){
        super(props);
        this.state={
            hintText:"至少输入8个字",
            minusNum:500,
            eightNum:8
        }
    }
    componentDidMount(){
        // 查询列表
        const id = this.props.params.id;
        // console.log(id);
        // 根据id获取商家头像、店铺名称
    }
    printKeyUpHandler(e){
        const value = e.target.value;
        const minusNum = 100 - parseInt(value.length);
        const eightNum = 8 - parseInt(value.length);
        const hintText = `还需要输入${eightNum}个字`;
        this.setState({
            minusNum: minusNum,
            hintText: hintText,
            eightNum: eightNum
        })
    }
    submitHandler(){
        const {minusNum,eightNum} = this.state;
        if(minusNum < 0){
            alert(`评论超过${Math.abs(minusNum)}`)
            return
        } 
        if (eightNum > 0) {
            alert(`还需输入${eightNum}个字`)
            return
        }
        alert("评价成功") 
        hashHistory.push('/')
    }
    render() {
        const { hintText, minusNum } = this.state;
        return (
            <div className="comment">
                <Header title={"用户评价"}/>
                <div className="comment-header clear-fix">
                    <img src={require("../userCenter/imgs/list/hanbao.png")} alt="" />
                    <span>豪大大鸡排</span>
                </div>
                <CommentStar />
                <div className="comment-print">
                    <p>
                        <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="4" 
                        style={{ resize:"none",border:"none",width:"100%"}}
                        placeholder="亲，菜品口味如何，对包装服务等还满意吗" 
                        onKeyUp={this.printKeyUpHandler.bind(this)}></textarea>
                    </p>
                    <p className="comment-printText">
                        {
                            minusNum > 92 ? 
                            <span>{hintText}</span> : 
                                <span><i style={{ fontStyle: "normal", color: minusNum < 0 ?"#e9203d":"initail"}}>{minusNum}</i>/100</span>
                        }
                    </p>
                </div>  
                <div className="comment-btn">
                    <button className="comment-btnSummit" onClick={this.submitHandler.bind(this)}>提交</button>
                    <button className="comment-btnCancel">取消</button>
                </div>
            </div>
        )
    }
}
export default Comment;