import React, { Component } from "react";

class CommentStar extends Component {
    constructor(props){
        super(props);
        this.state = {
            indexTaste:0,
            indexPackage:0
        }
    }
    tasteClickHandler(k) {
        this.setState({
            indexTaste: k
        })
    }
    PackageClickHandler(k) {
        this.setState({
            indexPackage: k
        })
    }
    render() {
        const arr = [1,2,3,4,5];
        const { indexTaste, indexPackage} = this.state;
        return (
            <div className="comment-star">
                <div className="clear-fix comment-starItem">
                    <div className="float-left comment-starItem-text">
                        口味：
                    </div>
                    <div className="float-left">
                        {arr.map((v, k) => {
                            return <span 
                            className={k < indexTaste ? "icon-star pink" : "icon-star"} 
                            key={k} 
                            onClick={this.tasteClickHandler.bind(this,v)}></span>
                        })}
                    </div>
                </div>
                <div className="clear-fix comment-starItem">
                    <div className="float-left comment-starItem-text">
                        包装：
                    </div>
                    <div className="float-left">
                        {arr.map((v, k) => {
                            return <span 
                            className={k < indexPackage ? "icon-star pink" : "icon-star"} 
                            key={k} 
                            onClick={this.PackageClickHandler.bind(this,v)}></span>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default CommentStar;