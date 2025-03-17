import React, { useState, useEffect } from "react";
import Page1 from "../components/Home/Page1";
import Page2 from "../components/Home/Page2";
import Slider from "../components/Home/Slider";
import Page4 from "../components/Home/Page4";
import Slider2 from "../components/Home/Slider2";
import Page5 from "../components/Home/Page5";
import Page3 from "../components/Home/Page3";
import Footer from "../components/Footer";
import IntroVideo from "../components/Home/IntroVideo";
import  LoaderPage  from "../components/LoaderPage";

const Home = ({ initialLoading, loadingProgress = 0 }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Handle initial loading
  useEffect(() => {
    if (!initialLoading) {
      // Initial assets are loaded, now we can check if we need to show the intro video
      const hasPlayed = localStorage.getItem('introVideoPlayed');
      if (hasPlayed === 'true') {
        // Skip intro for returning visitors
        setShowIntro(false);
        setShowContent(true);
      }
    }
  }, [initialLoading]);

  // Handle video end
  const handleVideoEnd = () => {
    setShowIntro(false);
    setShowContent(true);
  };

  return (
    <div>
      {initialLoading && (
        <LoaderPage loadingProgress={loadingProgress} />
      )}
      
      {!initialLoading && showIntro && (
        <IntroVideo onVideoEnd={handleVideoEnd} />
      )}
      
      {showContent && (
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
