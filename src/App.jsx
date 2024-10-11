import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dark from "./assets/images/background.png";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import ArrowPointer from "./components/ArrowPointer"; // Import ArrowPointer

const App = () => {

  const [BG, SetBG] = useState(Dark)

  return (
    <div className="App">     
      <>
        <img src={BG} alt="Background" className="background fixed" />
        <Navbar />
        <ArrowPointer />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Project BG={SetBG} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
        {/* <Footer/> */}
      </>
    </div>
    // </Router>
  );
};

export default App;
