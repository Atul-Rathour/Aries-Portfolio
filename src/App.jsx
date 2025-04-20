import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dark from "./assets/images/background.png";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import ArrowPointer from "./components/ArrowPointer";
import LoaderPage from "./components/LoaderPage";
import IntroVideo from "./assets/video/Intro.mp4";
import LenisWrapper from "./utils/LenisWrapper";

// List of critical assets to preload
const criticalAssets = [
  Dark, // Background image
  IntroVideo, // Intro video
  // Add other important images/videos here
];

const App = () => {
  const [BG, SetBG] = useState(Dark);
  const progressRef = useRef(null);

  return (
    <>
      <div className="App">
        <LenisWrapper>
          <Navbar />
          <img src={BG} alt="Background" className="background" />
          <div className="cursor">
            <ArrowPointer />
          </div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Project BG={SetBG} />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Router>
        </LenisWrapper>
      </div>
    </>
  );
};

export default App;
