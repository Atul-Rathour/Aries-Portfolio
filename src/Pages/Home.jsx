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

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true);

  // Preload all components
  useEffect(() => {
    const preloadComponents = async () => {
      // Preload all images and assets
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsPreloading(false);
      } catch (error) {
        console.error('Error preloading assets:', error);
        setIsPreloading(false);
      }
    };

    preloadComponents();
  }, []);

  const handleVideoEnd = () => {
    setShowContent(true);
  };

  return (
    <div className="relative">
      {!showContent && (
        <IntroVideo onVideoEnd={handleVideoEnd} />
      )}
      
      {showContent && (
        <div className={`transition-opacity duration-1000 ${isPreloading ? 'opacity-0' : 'opacity-100'}`}>
          <Page1 />
          <Page2 />
          <Slider />
          <Page4 />
          <Slider2 />
          <Page3 />
          <div className="hidden xl:block">
            <Page5 />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
