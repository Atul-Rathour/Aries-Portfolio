import React, { useMemo, useRef, useState, useEffect } from "react";
import { useScrollImageSequenceFramerCanvas } from "../hooks";
import Projects from "./Projects";

const createImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const handleDrawCanvas = (img, ctx) => {
  if (img.complete && img.naturalHeight !== 0) {
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
  }
};

const CyberScroll = ({ scrollRef }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [keyframes, setKeyframes] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const totalImages = 300;
      const loadedImages = [];
      let loadedCount = 0;

      for (let i = 1; i <= totalImages; i++) {
        try {
          const img = await createImage(`./images/male${i.toString().padStart(4, "0")}.webp`);
          loadedImages.push(img);
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
        } catch (error) {
          console.error(`Failed to load image ${i}:`, error);
        }
      }

      setKeyframes(loadedImages);
      setIsLoading(false);
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
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-64 h-4 bg-gray-200 rounded-full mb-4">
          <div 
            className="h-full bg-blue-500 rounded-full" 
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <p>Loading: {Math.round(loadingProgress)}%</p>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="h-[260rem]">
      <div className="sticky top-0">
        <canvas ref={canvasRef} className="absolute inset-0 block" />
      </div>
      <Projects />
    </section>
  );
};

export default CyberScroll;