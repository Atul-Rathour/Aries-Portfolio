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
import  LoaderPage  from "./components/LoaderPage";
import IntroVideo from "./assets/video/Intro.mp4";

// List of critical assets to preload
const criticalAssets = [
  Dark, // Background image
  IntroVideo, // Intro video
  // Add other important images/videos here
];

const App = () => {
  const [BG, SetBG] = useState(Dark);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const progressRef = useRef(null);
   

  return (
    <>
      {isLoading ? (
        <LoaderPage loadingProgress={loadingProgress} />
      ) : (
        <div className="App">
          <img src={BG} alt="Background" className="background fixed" />
          <Navbar />
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
        </div>
      )}
    </>
  );
};

export default App;