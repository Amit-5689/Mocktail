
const NamePage = (state = "", action) => {
    debugger

    switch (action.type) {
        case "pagename":
            return action.payload
        default:
            return state
    }

}
export { NamePage };