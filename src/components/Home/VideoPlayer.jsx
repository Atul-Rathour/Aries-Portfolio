// VideoPlayer.js
import React, { useState, useEffect, useRef } from "react";
import Vid from '../../assets/video/Intro.mp4'

const VideoPlayer = ({ onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      onVideoEnd(); // Notify parent component that video has ended
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [onVideoEnd]);


  const cover = useRef()
  return (
    <div className="video-container absolute w-[100vw] h-[100vh] z-[100]">
      <video onLoadedData={() => {
        cover.current.style.opacity = 0;
      }} ref={videoRef} autoPlay muted className="w-[100%] h-[100%] object-cover " >
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div ref={cover} className="w-[100vw] h-[100vh] absolute z-[2] bg-[#fff] " >
        Waiting
      </div>
    </div>
  );
};

export default VideoPlayer;
