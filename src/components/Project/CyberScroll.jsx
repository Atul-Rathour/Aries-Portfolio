import React, { useMemo, useRef, useState, useEffect } from "react";
import { useScrollImageSequenceFramerCanvas } from "../hooks";
import Projects from "./Projects";
import Loader from "./Loader";

const createImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const handleDrawCanvas = (img, ctx) => {
  const canvas = ctx.canvas;
  const widthRatio = canvas.width / img.width;
  const heightRatio = canvas.height / img.height;
  const ratio = Math.max(widthRatio, heightRatio);
  const centerX = (canvas.width - img.width * ratio) / 2;
  const centerY = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerX,
    centerY,
    img.width * ratio,
    img.height * ratio
  );
};

const CyberScroll = ({ scrollRef }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [keyframes, setKeyframes] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages = await Promise.all(
          [...new Array(300)].map((_, i) =>
            createImage(`./images/male${(i + 1).toString().padStart(4, "0")}.webp`)
          // createImage(
          //   `./image_sequence/10${(i + 1).toString().padStart(4, "0")}.webp`
          // )
          )
        );
        setKeyframes(loadedImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load images:", error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const containerRef = useRef(null);
  const [progress, canvasRef] = useScrollImageSequenceFramerCanvas({
    onDraw: handleDrawCanvas,
    keyframes: keyframes,
    scrollOptions: {
      target: containerRef,
      offset: ["start", "end"],
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader/>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="h-[330rem]">
      <div className="sticky top-0">
        <canvas ref={canvasRef} className="absolute  inset-0 block" />
      </div>
      <Projects />
    </section>
  );
};

export default CyberScroll;