import { createStore, applyMiddleware,} from "redux";
import rootReducer from "../reducers/index.jsx";
import promise from "redux-promise";
import thunk from 'redux-thunk';
// import { createLogger } from "redux-logger";
import { logger } from "redux-logger";
// 中间件必要插件 promise thunk
// const logger = createLogger(); 
const enhancer = applyMiddleware(thunk, promise,logger);
export default function configureStore(initialState){
    return createStore(rootReducer,initialState,enhancer
        // 触发devTools
        // window.devToolsExtension ? window.devToolsExtension() : undefined
    )
}


