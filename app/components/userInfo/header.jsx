import React, { Component } from "react";

import "./style.less";

class UserInfoHeader extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {userName,cityName} = this.props;
        return (
            <div className="userInfo-header clear-fix">
                <div className="float-left">
                    <span className="icon-user"></span>
                    <span>{userName}</span>
                </div>
                <div className="float-right">
                    <span className="icon-map-marker"></span>
                    <span>{cityName}</span>
                </div>
            </div>
        )
    }
}
export default UserInfoHeader;