// VideoPlayer.js
import React, { useState, useEffect, useRef } from "react";
import Vid from '../../assets/video/Intro.mp4'

const VideoPlayer = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false); // adding a isloading to check the video is loaded
  const coverRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      onVideoEnd(); // Notify parent component that video has ended
    };

    const handleCanPlayThrough = () => {
      setIsLoaded(true); // the video has loaded
    }

    videoElement.addEventListener('canPlayThrough', handleCanPlayThrough); // checking canPlayThrough event fires when the browser estimate that the video can play with any lag
    videoElement.addEventListener("ended", handleVideoEnd);

    videoElement.load()

    return () => {
      videoElement.removeEventListener('canPlayThrough', handleCanPlayThrough); // removing the event listener when the component is unmounted
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [onVideoEnd]);

  useEffect(() => {
    if(isLoaded && coverRef.current){
      coverRef.current.style.opacity = 0; // setting the cover to transparent when the video is loaded
      videoRef.current.play()
    }
  }, [isLoaded])


  return (
    <div className="video-container absolute w-[100vw] h-[100vh] z-[100]">
      <div ref={coverRef} className="w-[100vw] h-[100vh] absolute z-[2] bg-[#fff] " >
        Waiting
      </div>
      <video ref={videoRef} autoPlay muted className="w-[100%] h-[100%] object-cover " >
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
    </div>
  );
};

export default VideoPlayer;
