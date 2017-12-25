import { createStore, applyMiddleware,} from "redux";
import rootReducer from "../reducers/index.jsx";
import promise from "redux-promise";
import thunk from 'redux-thunk';

// 中间件必要插件 promise thunk
const enhancer = applyMiddleware(thunk, promise);
export default function configureStore(initialState){
    return createStore(rootReducer,initialState,enhancer
        // 触发devTools
        // window.devToolsExtension ? window.devToolsExtension() : undefined
    )
}


