
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Cocktail from './pages/Cocktail';
import Cocktailwise from './pages/Cocktailwise';

class App extends Component {

  render() {
    return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Cocktail key="cocktail" name="cocktail"/>}/>
          <Route exact path="/Vodka" element={<Cocktail key="Vodka" name="Vodka"/>}/>
          <Route exact path="/Negroni" element={<Cocktail key="Negroni" name="Negroni"/>}/>
          <Route exact path="/Mojito" element={<Cocktail key="Mojito" name="Mojito"/>}/>
          <Route exact path="/Daiquiri" element={<Cocktail key="Daiquiri" name="Daiquiri"/>}/>
          <Route exact path="/Margarita" element={<Cocktail key="Margarita" name="Margarita"/>}/>
          
          <Route exact path="/named" element={<Cocktailwise/>}/>
        </Routes>
      </BrowserRouter>
    </div>);
  }
}

export default App;
