import React from "react";
import NameCocktail from "../Components/NameCocktail";
import Spinner from "../Components/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from "../State/index";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
const Cocktail = (props) => {
  let ck_data = useSelector((state) => state.AllCocktail);
  const dispatch = useDispatch();

  const { newdata } = bindActionCreators(ActionCreators, dispatch);

  const [field, setField] = useState({
    loading: false,
    page: 1,
  });

  const doSomething = async () => {
    const apikey = "wxSqjtu9PAwmK4TCxK2jpQ==RQ6cjYQNsxlXsK6b";
    const apiurl = `https://api.api-ninjas.com/v1/cocktail?name=${props.name}`;

    setField({ loading: true, page: 1 });

    const options = {
      mehtod: "GET",
      headers: {
        "X-Api-Key": apikey,
      },
    };

    const response = await fetch(apiurl, options);

    newdata({ payload: await response.json() });

    setField({ loading: false, page: 1 });
  };

  useEffect(() => {
    (async function () {
      await doSomething();
    })();
  }, []);

  return (
    <div
      className="contianer-fluid my-2"
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 className="text-center">Cocktails....</h2>
      {field.loading && <Spinner />}

      <div className="row">
        {!field.loading &&
          ck_data.length > 0 &&
          ck_data.map((element) => {
            return (
              <div className="col-md-3">
                <NameCocktail
                  key={element.name}
                  title={element.name}
                  desc={element.instructions.slice(0, 85) + "..."}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cocktail;
