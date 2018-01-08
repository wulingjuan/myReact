import {createStore} from "redux";

export default function(){

    // 定义计算规则,即reducer
    function counter(state=0,action){
        switch (action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default:
                return state;
        }
    }

    // 根据计算规则生成store
    let store = createStore(counter);

    // 定义数据即（state）变化之后生成的派发规则
    store.subscribe(()=>{
        // console.log("fn1-> current state"+store.getState());
    })
    store.subscribe(() => {
        // console.log("fn2-> current state" + store.getState());
    })
    // 触发数据变化
    store.dispatch({type:"INCREMENT"});
    store.dispatch({type:"INCREMENT"});
    store.dispatch({type:"DECREMENT"});
}