import {combineReducers} from "redux";
import { AllCocktail } from "./loadreducer";

const root_reducers=combineReducers({
    AllCocktail: AllCocktail
})

export default root_reducers;