import React, { useRef, useMemo, useState, useEffect } from "react";
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
  const canvas = ctx.canvas;
  const canvasAspect = canvas.width / canvas.height;
  const imgAspect = img.width / img.height;
  let drawWidth, drawHeight, x, y;

  if (canvasAspect > imgAspect) {
    // Canvas is wider than the image
    drawHeight = canvas.height;
    drawWidth = img.width * (drawHeight / img.height);
    x = (canvas.width - drawWidth) / 2;
    y = 0;
  } else {
    // Canvas is taller than the image
    drawWidth = canvas.width;
    drawHeight = img.height * (drawWidth / img.width);
    x = 0;
    y = (canvas.height - drawHeight) / 2;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, x, y, drawWidth, drawHeight);
};

const CyberScroll = ({ scrollRef }) => {
  const containerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [keyframes, setKeyframes] = useState([]);

  const loadImages = useMemo(() => {
    return async () => {
      const loadedKeyframes = await Promise.all(
        [...new Array(300)].map((_, i) =>
          createImage(`./images/male${(i + 1).toString().padStart(4, "0")}.png`)
        )
      );
      setKeyframes(loadedKeyframes);
      setImagesLoaded(true);
    };
  }, []);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const [progress, canvasRef] = useScrollImageSequenceFramerCanvas({
    onDraw: handleDrawCanvas,
    keyframes: keyframes,
    scrollOptions: {
      target: containerRef,
      offset: ["start", "end"],
    },
  });

  return (
    <section ref={containerRef} className="h-[260rem] relative">
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
        {imagesLoaded ? (
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-contain"
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Projects />
    </section>
  );
};

export default CyberScroll;