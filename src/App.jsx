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
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    
    const preloadAssets = async () => {
      try {
        // Minimum loading time for better UX
        const minLoadingPromise = new Promise(resolve => 
          setTimeout(() => resolve(), 2000)
        );
        
        // Preload background image and other critical assets
        const preloadPromises = criticalAssets.map(src => {
          return new Promise((resolve) => {
            if (typeof src === 'string') {
              if (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.webp')) {
                const img = new Image();
                
                img.onload = () => {
                  if (mounted) {
                    // Update progress as each asset loads
                    setLoadingProgress(prev => 
                      Math.min(90, prev + (90 / criticalAssets.length))
                    );
                  }
                  resolve();
                };
                
                img.onerror = () => {
                  console.error(`Failed to load image: ${src}`);
                  resolve(); // Resolve anyway to not block loading
                };
                
                img.src = src;
              } else if (src.endsWith('.mp4') || src.endsWith('.webm')) {
                // Preload video metadata only, not the full video
                const video = document.createElement('video');
                
                video.onloadedmetadata = () => {
                  if (mounted) {
                    setLoadingProgress(prev => 
                      Math.min(90, prev + (90 / criticalAssets.length))
                    );
                  }
                  resolve();
                };
                
                video.onerror = () => {
                  console.error(`Failed to load video: ${src}`);
                  resolve(); // Resolve anyway to not block loading
                };
                
                video.src = src;
                video.preload = "metadata"; // Only load metadata, not the full video
                video.load();
              } else {
                // For other asset types
                setTimeout(() => {
                  if (mounted) {
                    setLoadingProgress(prev => 
                      Math.min(90, prev + (90 / criticalAssets.length))
                    );
                  }
                  resolve();
                }, 300);
              }
            } else {
              // For non-string assets (like imported modules)
              setTimeout(() => {
                if (mounted) {
                  setLoadingProgress(prev => 
                    Math.min(90, prev + (90 / criticalAssets.length))
                  );
                }
                resolve();
              }, 300);
            }
          });
        });
        
        // Wait for both minimum time and all assets
        await Promise.all([minLoadingPromise, ...preloadPromises]);
        
        // Listen for document complete or check if already complete
        if (document.readyState === 'complete') {
          completeLoading();
        } else {
          window.addEventListener('load', completeLoading);
        }
      } catch (error) {
        console.error("Error during preloading:", error);
        completeLoading(); // Complete loading anyway
      }
    };
    
    const completeLoading = () => {
      if (!mounted) return;
      
      // Finish progress to 100%
      setLoadingProgress(100);
      
      // Add a small delay before hiding loader
      setTimeout(() => {
        if (mounted) {
          setIsLoading(false);
        }
      }, 800);
      
      // Clean up load event listener
      window.removeEventListener('load', completeLoading);
    };
    
    preloadAssets();
    
    return () => {
      mounted = false;
      window.removeEventListener('load', completeLoading);
    };
  }, []);

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
              <Route path="/" element={<Home initialLoading={isLoading} loadingProgress={loadingProgress} />} />
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