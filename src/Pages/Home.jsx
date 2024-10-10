import React, { useState } from "react";
import Page1 from "../components/Home/Page1";
import Page2 from "../components/Home/Page2";
import Slider from "../components/Home/Slider";
import Page4 from "../components/Home/Page4";
import Slider2 from "../components/Home/Slider2";
import Page5 from "../components/Home/Page5";
import Page3 from "../components/Home/Page3";
import Footer from "../components/Footer";
import VideoPlayer from "../components/Home/VideoPlayer";

const Home = () => {
  const [videoPlayed, setVideoPlayed] = useState(false); // Initially, set to false

  const handleVideoEnd = () => {
    setVideoPlayed(true); // Set videoPlayed to true once video ends
  };

  return (
    <div>
      {!videoPlayed ? (
        <VideoPlayer onVideoEnd={handleVideoEnd} /> // Render video player while video is playing
      ) : (
        <>
          <Page1 />
          <Page2 />
          <Slider />
          <Page4 />
          <Slider2 />
          <Page3 />
          <Page5 />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
