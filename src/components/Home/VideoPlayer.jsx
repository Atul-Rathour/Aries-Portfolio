import React, { useState, useEffect, useRef } from "react";
import Vid from '../../assets/video/Intro.mp4'
import { IntroPage } from "./IntroPage";

const VideoPlayer = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const coverRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      onVideoEnd();
    };

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
      setIsBuffering(false);
    };

    const handleWaiting = () => {
      setIsBuffering(true);
    };

    const handlePlaying = () => {
      setIsBuffering(false);
    };

    videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
    videoElement.addEventListener("ended", handleVideoEnd);
    videoElement.addEventListener("waiting", handleWaiting);
    videoElement.addEventListener("playing", handlePlaying);

    videoElement.load();

    return () => {
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.removeEventListener("ended", handleVideoEnd);
      videoElement.removeEventListener("waiting", handleWaiting);
      videoElement.removeEventListener("playing", handlePlaying);
    };
  }, [onVideoEnd]);

  useEffect(() => {
    if(isLoaded && coverRef.current){
      coverRef.current.style.opacity = 0;
      videoRef.current.play();
    }
  }, [isLoaded]);

  return (
    <div className="video-container absolute w-[100vw] h-[100vh] z-[100]">
      <div ref={coverRef} className="w-[100vw] h-[100vh] absolute z-[2] transition-opacity duration-500">
        <div className="absolute w-[100vw] h-[100vh] flex justify-center items-center z-[3]">
          <p className="p1 text-[2.5rem] text-center">
            {isBuffering ? <>
                Hold tight ! <br /> 
                <span className="text-[1.3rem] tracking-wide">an extraordinary experience is loading just for you!</span>
              </>  : (
              <>
                Hold tight ! <br /> 
                <span className="text-[1.3rem] tracking-wide">an extraordinary experience is loading just for you!</span>
              </>
            )}
          </p>
        </div>
        <IntroPage/>
      </div>
      <video 
        ref={videoRef}  
        muted 
        playsInline 
        className="w-[100%] h-[100%] object-cover"
        preload="auto"
      >
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;