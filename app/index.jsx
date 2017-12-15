import React,{Component} from "react";
import ReactDOM from "react-dom";
import List from "./containers/Hello/subpage/List";
import Hello from "./containers/Hello/Hello";
import Todo from "./containers/Todo/Todo";
import { Provider } from "react-redux";
import configureStore from "./store/index.js";
import {browserHistory} from "react-router";
import RouteMap from "./router/router";
import "./app.less";

const store = configureStore();

ReactDOM.render(
    <RouteMap history={browserHistory}/>,
    document.getElementById("root")
)