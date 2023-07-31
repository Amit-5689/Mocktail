
const NamedSearch = (state = "cocktail", action) => {

    switch (action.type) {
        case "namedsearch":
            return action.payload
        default:
            return state
    }

}
export { NamedSearch };