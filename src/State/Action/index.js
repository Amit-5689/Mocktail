export const newdata = (data) => {
    return (dispatch)=>{
        dispatch({
            type: "newdata",
            payload:data.payload
    })}
}