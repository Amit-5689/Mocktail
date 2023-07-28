
const AllCocktail = (state = [], action) => {

    switch (action.type) {
        case "newdata":
            return [...action.payload]
        default:
            return state
    }

}
export { AllCocktail };