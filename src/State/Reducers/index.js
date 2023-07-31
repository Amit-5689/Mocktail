import { combineReducers } from "redux";
import { AllCocktail } from "./loadreducer";
import { NamePage } from "./pageReducer";
import { NamedSearch } from "./nameReducer";

const root_reducers = combineReducers({
    AllCocktail: AllCocktail,
    NamePage: NamePage,
    NamedSearch: NamedSearch
})

export default root_reducers;