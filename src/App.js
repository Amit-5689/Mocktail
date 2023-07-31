import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cocktail from "./pages/Cocktail";
import Cocktailwise from "./pages/Cocktailwise";
import backgroundVideo from "./Untitled.mp4"
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  return (<div>
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        height={2}
        color='#0dcaf0'
        progress={progress}
      />
      <div className="bgContainer">
        <div className="overlay">
          <video src={backgroundVideo} autoPlay loop muted />
        </div>
      </div>
      <div className="content">

        <Routes>
          <Route
            exact
            path="/"
            element={<Cocktail setProgress={setProgress}  key="cocktail" name="cocktail" />}
          />
          <Route
            exact
            path="/Vodka"
            element={<Cocktail setProgress={setProgress}  key="Vodka" name="Vodka" />}
          />
          <Route
            exact
            path="/Negroni"
            element={<Cocktail setProgress={setProgress}  key="Negroni" name="Negroni" />}
          />
          <Route
            exact
            path="/Mojito"
            element={<Cocktail setProgress={setProgress}  key="Mojito" name="Mojito" />}
          />
          <Route
            exact
            path="/Daiquiri"
            element={<Cocktail setProgress={setProgress}  key="Daiquiri" name="Daiquiri" />}
          />
          <Route
            exact
            path="/Margarita"
            element={<Cocktail setProgress={setProgress}  key="Margarita" name="Margarita" />}
          />

          <Route exact path="/named" element={<Cocktailwise setProgress={setProgress} />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>);
}
export default App;