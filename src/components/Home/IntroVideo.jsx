import React, { useState, useEffect, useRef } from "react";
import Vid from '../../assets/video/Intro.mp4'
import LoaderPage, { LoaderPageBG } from "../LoaderPage";

const IntroVideo = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading video...");
  const [hasVideoPlayed, setHasVideoPlayed] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Preload video
  useEffect(() => {
    if (hasVideoPlayed) return;
    
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Set video loading priority
    videoElement.preload = "auto";
    
    // Start loading the video immediately
    videoElement.load();

    const handleLoadedData = () => {
      setIsVideoReady(true);
      setLoadingText("Video ready to play!");
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

    const handleVideoEnd = () => {
      setHasVideoPlayed(true);
      if (onVideoEnd) {
        onVideoEnd();
      }
    };

    // Add event listeners
    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
    videoElement.addEventListener("ended", handleVideoEnd);
    videoElement.addEventListener("waiting", handleWaiting);
    videoElement.addEventListener("playing", handlePlaying);
    videoElement.addEventListener("progress", handleProgress);

    return () => {
      // Clean up event listeners
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.removeEventListener("ended", handleVideoEnd);
      videoElement.removeEventListener("waiting", handleWaiting);
      videoElement.removeEventListener("playing", handlePlaying);
      videoElement.removeEventListener("progress", handleProgress);
    };
  }, [hasVideoPlayed, onVideoEnd]);

  // Play video when ready
  useEffect(() => {
    if (hasVideoPlayed || !isVideoReady) return;
    
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Error playing video:", error);
          // Try to play again with user interaction if autoplay fails
          const playOnInteraction = () => {
            videoRef.current.play().catch(e => {
              console.error("Still can't play:", e);
              if (onVideoEnd) {
                onVideoEnd();
              }
            });
            document.removeEventListener('click', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
        }
      };
      playVideo();
    }
  }, [isVideoReady, hasVideoPlayed, onVideoEnd]);

  // If the video has already been played, don't render anything
  if (hasVideoPlayed) {
    return null;
  }

  return (
    <div className="video-container absolute w-[100vw] h-[100vh] z-[100]">
      {!isLoaded && (
        <LoaderPage loadingProgress={loadingProgress} />
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


      <button 
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            if (onVideoEnd) {
              onVideoEnd();
            }
          }
        }}
        className="p1 absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 text-lg border-2 border-[#66C2C5] rounded-lg hover:bg-[#66C2C5] hover:text-black transition-colors duration-300"
      >
        Skip Intro
      </button>
    </div>
  );
};

export default IntroVideo;