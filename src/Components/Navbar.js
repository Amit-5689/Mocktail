
import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Navbar extends Component {
    

    render() {
        return (<div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed" style={{backgroundColor:"rgba(0,0,0,,0.7)", color:"white", width:"100%", zIndex:"1"}}>
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Hello Cocktails</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/Vodka">Vodka</Link></li>
                        <li className="nav-item"><Link className="nav-link "to="/Negroni">Negroni</Link></li>
                        <li className="nav-item"><Link className="nav-link "to="/Mojito">Mojito</Link></li>
                        <li className="nav-item"><Link className="nav-link "to="/Daiquiri">Daiquiri</Link></li>
                        <li className="nav-item"><Link className="nav-link "to="/Margarita">Margarita</Link></li>
                        </ul>
                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit" >Search</button>
                        </form>
                    </div>
                    </div>
                </nav>
          </div>)
    }
}

export default Navbar;