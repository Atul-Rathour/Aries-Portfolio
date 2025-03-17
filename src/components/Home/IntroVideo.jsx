import React, { useState, useEffect, useRef } from "react";
import Vid from '../../assets/video/Intro.mp4'
import { LoaderPageBG } from "../LoaderPage";

const IntroVideo = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const coverRef = useRef(null);
  const [loadingText, setLoadingText] = useState("Loading video...");
  const [hasVideoPlayed, setHasVideoPlayed] = useState(false);

  // Check if the video has been played before
  useEffect(() => {
    const hasPlayed = localStorage.getItem('introVideoPlayed');
    if (hasPlayed === 'true') {
      setHasVideoPlayed(true);
      // Skip video for returning visitors
      if (onVideoEnd) {
        onVideoEnd();
      }
    }
  }, [onVideoEnd]);

  useEffect(() => {
    if (hasVideoPlayed) return; // Skip video setup for returning visitors
    
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnd = () => {
      // Mark that the video has been played
      localStorage.setItem('introVideoPlayed', 'true');
      setHasVideoPlayed(true);
      if (onVideoEnd) {
        onVideoEnd();
      }
    };

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
      setIsBuffering(false);
      setLoadingText("Video ready to play!");
    };

    const handleWaiting = () => {
      setIsBuffering(true);
      setLoadingText("Buffering video...");
    };

    const handlePlaying = () => {
      setIsBuffering(false);
    };

    const handleProgress = () => {
      if (videoElement.buffered.length > 0) {
        const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
        const duration = videoElement.duration;
        if (duration > 0) {
          const progress = Math.round((bufferedEnd / duration) * 100);
          setLoadingProgress(progress);
          setLoadingText(`Loading video: ${progress}%`);
        }
      }
    };

    // Add event listeners
    videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
    videoElement.addEventListener("ended", handleVideoEnd);
    videoElement.addEventListener("waiting", handleWaiting);
    videoElement.addEventListener("playing", handlePlaying);
    videoElement.addEventListener("progress", handleProgress);

    // Start loading the video
    videoElement.load();

    return () => {
      // Clean up event listeners
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.removeEventListener("ended", handleVideoEnd);
      videoElement.removeEventListener("waiting", handleWaiting);
      videoElement.removeEventListener("playing", handlePlaying);
      videoElement.removeEventListener("progress", handleProgress);
    };
  }, [hasVideoPlayed, onVideoEnd]);

  // Play video when loaded
  useEffect(() => {
    if (hasVideoPlayed) return; // Skip for returning visitors
    
    if (isLoaded && videoRef.current) {
      // Fade out the cover
      if (coverRef.current) {
        coverRef.current.style.opacity = 0;
      }
      
      // Try to play the video
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
        // Try to play again with user interaction if autoplay fails
        const playOnInteraction = () => {
          videoRef.current.play().catch(e => {
            console.error("Still can't play:", e);
            // If still can't play, skip the video
            if (onVideoEnd) {
              onVideoEnd();
            }
          });
          document.removeEventListener('click', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
      });
    }
  }, [isLoaded, hasVideoPlayed, onVideoEnd]);

  // If the video has already been played, don't render anything
  if (hasVideoPlayed) {
    return null;
  }

  return (
    <div className="video-container absolute w-[100vw] h-[100vh] z-[100]">
      {!isLoaded && (
        <div ref={coverRef} className="w-[100vw] h-[100vh] absolute z-[2] transition-opacity duration-500">
          <div className="absolute w-[100%] h-[100vh] flex justify-center items-center flex-col z-[3]">
            <p className="p1 text-[2.5rem] text-center">
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
              {loadingText}
            </p>
          </div>
          <LoaderPageBG />
        </div>
      )}
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

export default IntroVideo;