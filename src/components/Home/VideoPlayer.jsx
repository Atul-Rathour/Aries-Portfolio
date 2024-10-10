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

  return (
    <div className="video-container absolute w-[100vw] h-[100vh] z-[100]">
      <video ref={videoRef} autoPlay muted className="w-[100%] h-[100%] object-cover " >
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
