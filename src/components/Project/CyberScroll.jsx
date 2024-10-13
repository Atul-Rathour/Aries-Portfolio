import React, { useState, useEffect, useRef, useMemo } from "react";
import { useScrollImageSequenceFramerCanvas } from "../hooks";
import Projects from "./Projects";

const TOTAL_IMAGES = 300;
const INITIAL_LOAD_COUNT = 20; // Number of images to load initially
const BATCH_SIZE = 10; // Number of images to load in each subsequent batch

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
  const [keyframes, setKeyframes] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const containerRef = useRef(null);

  const loadImageBatch = async (start, end) => {
    const newImages = [];
    for (let i = start; i <= end; i++) {
      if (i > TOTAL_IMAGES) break;
      try {
        const img = await createImage(`./images/male${i.toString().padStart(4, "0")}.webp`);
        newImages.push(img);
      } catch (error) {
        console.error(`Failed to load image ${i}:`, error);
      }
    }
    return newImages;
  };

  useEffect(() => {
    const loadImages = async () => {
      // Load initial batch
      const initialImages = await loadImageBatch(1, INITIAL_LOAD_COUNT);
      setKeyframes(initialImages);
      setIsInitialLoadComplete(true);
      setLoadingProgress((INITIAL_LOAD_COUNT / TOTAL_IMAGES) * 100);

      // Load remaining images in batches
      let currentIndex = INITIAL_LOAD_COUNT + 1;
      while (currentIndex <= TOTAL_IMAGES) {
        const newImages = await loadImageBatch(currentIndex, currentIndex + BATCH_SIZE - 1);
        setKeyframes(prev => [...prev, ...newImages]);
        currentIndex += BATCH_SIZE;
        setLoadingProgress((Math.min(currentIndex, TOTAL_IMAGES) / TOTAL_IMAGES) * 100);
      }
    };

    loadImages();
  }, []);

  const [progress, canvasRef] = useScrollImageSequenceFramerCanvas({
    onDraw: handleDrawCanvas,
    keyframes: keyframes,
    scrollOptions: {
      target: containerRef,
      offset: ["start", "end"],
    },
  });

  if (!isInitialLoadComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-64 h-4 bg-gray-200 rounded-full mb-4">
          <div 
            className="h-full bg-blue-500 rounded-full" 
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <p>Loading initial content: {Math.round(loadingProgress)}%</p>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="h-[260rem] relative">
      <div className="sticky top-0">
        <canvas ref={canvasRef} className="absolute inset-0 block" />
      </div>
      {loadingProgress < 100 && (
        <div className="absolute top-4 right-4 bg-white p-2 rounded shadow">
          Loading: {Math.round(loadingProgress)}%
        </div>
      )}
      <Projects />
    </section>
  );
};

export default CyberScroll;