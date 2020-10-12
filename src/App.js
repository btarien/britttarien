import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
