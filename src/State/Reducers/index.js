import {combineReducers} from "redux";
import loadreducer from "./loadreducer"
const reducers=combineReducers({
    load:loadreducer
})
export default reducers;