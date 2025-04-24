// Updated IntroVideo.jsx with accurate reveal during bar animation
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Vid from "../../assets/video/Intro.mp4";
import LoaderPage from "../LoaderPage";
import BG from "../../assets/images/background.png";

const IntroVideo = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const containerRef = useRef(null);
  const revealRef = useRef(null);
  const [isFullyBuffered, setIsFullyBuffered] = useState(false);

  const handleVideoEnd = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onVideoEnd) onVideoEnd();
      },
    });

    tl.set(revealRef.current, {
      y: "100vh",
      opacity: 1,
      zIndex: 100,
      // pin: true,
    })
      .to(barRef.current, {
        y: "-100vh",
        duration: 2,
        ease: "power2.inOut",
      })
      .to(
        revealRef.current,
        {
          y: "0vh",
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (onVideoEnd) onVideoEnd();
          },
        },
        "-=0.3"
      );
  };

  // useEffect(() => {
  //   const videoElement = videoRef.current;
  //   if (!videoElement) return;

  //   videoElement.preload = "auto";
  //   videoElement.load();

  //   const checkBuffering = () => {
  //     if (videoElement.buffered.length > 0) {
  //       const duration = videoElement.duration;
  //       const bufferedEnd = videoElement.buffered.end(
  //         videoElement.buffered.length - 1
  //       );
  //       if (isNaN(duration) || !duration) {
  //         setIsFullyBuffered(true);
  //         return;
  //       }
  //       if (bufferedEnd >= duration - 0.1) {
  //         setIsFullyBuffered(true);
  //       } else {
  //         const originalTime = videoElement.currentTime;
  //         videoElement.currentTime = duration - 0.1;
  //         videoElement.currentTime = originalTime;
  //       }
  //     }
  //   };

  //   const handleError = () => setIsFullyBuffered(true);
  //   const handleCanPlayThrough = () => setIsFullyBuffered(true);

  //   videoElement.addEventListener("progress", checkBuffering);
  //   videoElement.addEventListener("loadedmetadata", checkBuffering);
  //   videoElement.addEventListener("ended", handleVideoEnd);
  //   videoElement.addEventListener("error", handleError);
  //   videoElement.addEventListener("canplaythrough", handleCanPlayThrough);

  //   const timeout = setTimeout(() => setIsFullyBuffered(true), 10000);

  //   return () => {
  //     videoElement.removeEventListener("progress", checkBuffering);
  //     videoElement.removeEventListener("loadedmetadata", checkBuffering);
  //     videoElement.removeEventListener("ended", handleVideoEnd);
  //     videoElement.removeEventListener("error", handleError);
  //     videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
  //     clearTimeout(timeout);
  //   };
  // }, [onVideoEnd]);

  // useEffect(() => {
  //   if (isFullyBuffered && videoRef.current) {
  //     const playVideo = async () => {
  //       try {
  //         await videoRef.current.play();
  //       } catch (error) {
  //         const playOnInteraction = () => {
  //           videoRef.current.play().catch(() => {
  //             if (onVideoEnd) onVideoEnd();
  //           });
  //           document.removeEventListener("click", playOnInteraction);
  //         };
  //         document.addEventListener("click", playOnInteraction);
  //       }
  //     };
  //     playVideo();
  //   }
  // }, [isFullyBuffered, onVideoEnd]);

  return (
    <div
      ref={containerRef}
      className="video-container absolute w-[100vw] h-[100vh] z-[100] overflow-hidden"
    >
      {!isFullyBuffered && <LoaderPage />}

      <button
        onClick={() => handleVideoEnd()}
        className="p1 absolute bottom-8 left-1/2 z-[91] -translate-x-1/2 px-6 py-3 text-lg border-2 border-[#66C2C5] rounded-lg hover:bg-[#66C2C5] hover:text-black transition-colors duration-300"
      >
        Skip Intro
      </button>

      <div className="w-full h-full relative">
        <video
          ref={videoRef}
          src={Vid}
          muted
          playsInline
          className="w-[100%] h-[100%] object-cover"
          autoPlay
          // loop
          onEnded={handleVideoEnd}
          // preload="auto"
          onLoadedData={() => setIsFullyBuffered(true)}
        />

        <div
          ref={barRef}
          className="absolute bottom-0 left-0 w-full h-[8px] z-[110]"
          style={{
            boxShadow:
              "0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
            backgroundColor: "white",
          }}
        />

        <div
          ref={revealRef}
          className="absolute top-0 left-0 w-full h-full z-[90]"
          style={{
            opacity: 0, // Set to 1 for visibility; adjust if part of an animation
            background:
              "linear-gradient(to bottom, #ffffff, #e6f0ff 70%, #66b0ff 90%, #228dff)",
            boxShadow: `
      0 0 10px #ffffff, 
      0 0 20px #ffffff, 
      0 0 40px #e6f0ff, 
      0 0 60px #66b0ff, 
      0 0 80px #228dff, 
      0 0 100px #228dff
    `,
            filter: "brightness(2)", // Slight brightness boost
          }}
        >
          {/* <img src={BG} alt="" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
