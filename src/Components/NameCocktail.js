import React from 'react';
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { ActionCreators } from "../State/index";
// import { bindActionCreators } from "redux";

const NameCocktail = ({title, desc}) => {
  // const dispatch = useDispatch();

  // const { namePage } = bindActionCreators(ActionCreators, dispatch);
  const handlename=()=>{
    console.log(title)
    // namePage(title)
  }
  return (<div>
    <div
      className="card my-2 mx-5"
      style={{ backgroundColor: "rgba(0,0,0,0.4)", color: "white" }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h5>
        <h6 className="card-subtitile">Instructions</h6>
        <p className="card-text">{desc.slice(0, 85) + "..."}</p>
        <Link to="/named">
          <button type="button" className="btn btn-info" onClick={()=>handlename}>
            About Cocktail
          </button>
        </Link>
      </div>
    </div>
  </div>);
}

export default NameCocktail;