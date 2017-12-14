import React, { Component } from "react";

export default class C extends Component {
    changeCityName(){
        const actions = this.props.actions;
        actions.updateCity({
            userid:'123',
            city:'beijing'
        })
    }
    render() {
        return (
            <p>
                <button onClick={this.changeCityName.bind(this)}>修改</button>
            </p>
        )
    }
}