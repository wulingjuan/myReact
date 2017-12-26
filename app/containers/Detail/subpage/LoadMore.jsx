import React,{Component} from "react";


class LoadMore extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let timer;
        const element = this.refs.wrapper;
        const loadMoreFn = this.props.loadMoreFn;
        function callback(){
            var top = element.getBoundingClientRect().top;
            var windowHeight = window.screen.height;
            if(top && top < windowHeight){
                loadMoreFn();
            }
        }
        window.addEventListener("scroll", function () {
            if(this.props.isLoading){
                return;
            }
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(callback, 50);
        }.bind(this),false)
    }

    render(){
        const { isLoading } = this.props;
        return (
            <div ref="wrapper" style={{textAlign:"center",padding:10,color:"#666"}} className="load-more">
                {
                    isLoading ?
                    <img src={require("../imgs/loader.gif")} />
                    :<span>加载更多</span>
                }
            </div>
        )
    }
}
export default LoadMore;