const newdata = (data) => {
  return (dispatch) => {
    dispatch({
      type: "newdata",
      payload: data.payload
    });
  };
};
const namePage = (name) => {
  return (dispatch) => {
    dispatch({
      type: "pagename",
      payload: name.payload
    });
  };
};
const searchName = (named) => {
  return (dispatch) => {
    dispatch({
      type: "namedsearch",
      payload: named.Payload
    });
  };
};


export { newdata, namePage, searchName }