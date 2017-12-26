import React ,{Component} from "react";
import ReactDOM from "react-dom";
import { Link} from "react-router";
import SearchInput from "../../components/SearchInput/SearchInput";
import { hashHistory } from "react-router";
import {connect} from "react-redux";
import * as actions from "../../actions/index";

import "./style";

class Header extends Component{
    constructor(props){
        super(props);
    }
    searchHandler(url) {
        // hashHistory.push("/search/all"+encodeURLComponent(this.state.keyword))
        const {dispatch} = this.props;
        dispatch(actions.goodsList(url));
        hashHistory.push(`/search/all/${url}`)
    }
    
    render(){
        return (
            <div className="clear-fix header">
                <div className="float-left header-city">
                    <Link to="city" style={{color:"#fff"}}>
                        <span>{this.props.cityName}</span>&nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="float-right header-user">
                    <Link to="login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                {/* value为默认值 */}
                <SearchInput enterHandler={this.searchHandler.bind(this)} value=""/>
            </div>
        )
    }
}
const mapState = state => state;
export default connect(
    mapState
)(Header);