
import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Cocktail from './Components/Cocktail';

class App extends Component {

  render() {
    return(
    <div>
      <Navbar/>
      <Cocktail/>

    </div>);
  }
}

export default App;
