
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
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Cocktail/>}/>
          <Route exact path="/named" element={<Cocktailwise/>}/>
        </Routes>
      </BrowserRouter>
    </div>);
  }
}

export default App;
