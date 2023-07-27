import {combineReducers} from "redux";
import { AllCocktail } from "./loadreducer";

const root_reducers=combineReducers({
    temp:AllCocktail
})

export default root_reducers;