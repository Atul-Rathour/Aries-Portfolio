import React, { useState, useEffect } from "react";
import Page1 from "../components/Home/Page1";
import Page2 from "../components/Home/Page2";
import Slider from "../components/Home/Slider";
import Page4 from "../components/Home/Page4";
import Slider2 from "../components/Home/Slider2";
import Page5 from "../components/Home/Page5";
import Page3 from "../components/Home/Page3";
import Footer from "../components/Footer";
import VideoPlayer from "../components/Home/VideoPlayer";
import { IntroPage } from "../components/Home/IntroPage";

const Home = ({ initialLoading }) => {
  const [videoPlayed, setVideoPlayed] = useState(false); // Initially, set to false
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Handle video end event
  const handleVideoEnd = () => {
    setVideoPlayed(true); // Set videoPlayed to true once video ends
  };

  // Handle video loaded event
  const handleVideoLoaded = (loaded) => {
    setVideoLoaded(loaded);
  };

  // Effect to handle the transition from initial loading to video loading
  useEffect(() => {
    if (!initialLoading && videoLoaded) {
      // Both initial assets and video are loaded, hide intro after a short delay
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [initialLoading, videoLoaded]);

  return (
    <div>
      {!videoPlayed ? (
        <div>
          {showIntro && !videoLoaded && (
            <IntroPage>
              <div className="absolute z-[3] text-center">
                <p className="p1 text-[2.5rem]">
                  Hold tight ! <br />
                  <span className="text-[1.3rem] tracking-wide">
                    an extraordinary experience is loading just for you!
                  </span>
                </p>
                <div className="mt-8 w-64 h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mx-auto">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                  ></div>
                </div>
                <p className="text-[1rem] mt-2">
                  {Math.round(loadingProgress)}%
                </p>
              </div>
            </IntroPage>
          )}
          <VideoPlayer 
            onVideoEnd={handleVideoEnd} 
            onVideoLoaded={handleVideoLoaded}
          />
        </div>
      ) : (
        <>
          <Page1 />
          <Page2 />
          <Slider />
          <Page4 />
          <Slider2 />
          <Page3 />
          <div className="hidden lg:block">
            <Page5 />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
