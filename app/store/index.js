import { createStore} from "redux";
import rootReducer from "../reducers/index.jsx";

export default function configureStore(initialState){
    const store = createStore(rootReducer, initialState,
        // 触发devTools
        // window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store;
}


