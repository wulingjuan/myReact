import React ,{Component} from "react";
import {Router,Route,IndexRoute} from "react-router";

import App from "../containers/App";
import Home from "../containers/Home/index";
import List from "../containers/List/index";
import Detail from "../containers/Detail/index";
import NotFound from "../containers/NotFound/index";

export default class RouteMap extends Component{
    updateHandler(){
        console.log('每次route变化之后就会触发');
        // 统计PV
    }
    render(){
        return (
           <Router history={this.props.history} onUpdate={this.updateHandler.bind(this)}>
               <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='list' component={List} />
                    <Route path='detail/:id' component={Detail} />
                    <Route path='*' component={NotFound} />
               </Route>
           </Router>
        )
    }
}