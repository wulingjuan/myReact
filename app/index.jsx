import React ,{Component} from "react";
import ReactDOM from "react-dom";
import List from "./containers/Hello/subpage/List";
import Todo from "./containers/Todo/Todo";
import {browserHistory} from "react-router";
import RouteMap from "./router/router";


ReactDOM.render(
    <RouteMap history={browserHistory}/>,
    document.getElementById("root")
)