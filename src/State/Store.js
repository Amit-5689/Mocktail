import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import root_reducers from "./Reducers"

export default createStore(root_reducers, composeWithDevTools(applyMiddleware(thunk)))
