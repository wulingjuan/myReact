import React ,{Component} from "react";
import {Router,Route,IndexRoute} from "react-router";

import configStore from "../store/index.js";
import {Provider} from "react-redux";
import App from "../containers/App";
import Home from "../containers/Home/index";
import List from "../containers/List/index";
import Hello from "../containers/Hello/Hello";
import City from "../containers/City/city";
import NotFound from "../containers/NotFound/index";
import Search from "../containers/Search/search";
import Detail from "../containers/Detail/index";
export default class RouteMap extends Component{
    updateHandler(){
        // 每次route变化之后就会触发;
        // 统计PV
    }
    render(){
        const store = configStore()
        return (
            <Provider store={store}>
                <Router history={this.props.history} onUpdate={this.updateHandler.bind(this)}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Home} />
                        <Route path='list' component={List} />
                        <Route path="search/:category(/:keyword)" component={Search}/>
                        <Route path='city' component={City} />
                        <Route path='detail/:id' component={Detail} />
                        <Route path='hello' component={Hello} />
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}