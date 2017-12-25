import React ,{Component} from "react";
import ReactDOM from "react-dom";
import { Link} from "react-router";
import SearchInput from "../../components/SearchInput/SearchInput";
import { hashHistory } from "react-router";


import "./style";

class Header extends Component{
    constructor(props){
        super(props);
    }
    searchHandler(url) {
        // hashHistory.push("/search/all"+encodeURLComponent(this.state.keyword))
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
                    <i className="icon-user"></i>
                </div>
                {/* value为默认值 */}
                <SearchInput enterHandler={this.searchHandler} value=""/>
            </div>
        )
    }
}
export default Header;