import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dark from "./assets/images/background.png";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import ArrowPointer from "./components/ArrowPointer"; // Import ArrowPointer
import { IntroPage } from "./components/Home/IntroPage";

const App = () => {

  const [BG, SetBG] = useState(Dark)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    loadAssets();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="absolute w-[100vw] h-[100vh] flex justify-center items-center z-[2]  " >
          <p className="p1 text-center text-[2rem] " >Loading...</p>
        </div>

        <IntroPage/>
      </>
    ) ;
  }

  return (
    <div className="App">     
      <>
        <img src={BG} alt="Background" className="background fixed" />
        <Navbar />
        <div className="cursor" >
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
        {/* <Footer/> */}
      </>
    </div>
    // </Router>
  );
};

export default App;
