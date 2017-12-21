import React ,{Component} from "react";
import Home from "../containers/Home/index";
import Header from "../components/Header/Header";
import "../static/css/common";
import "../static/css/font";

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header cityName="深圳"/>
                <Home/>
            </div>
        )
    }   
}
export default App;