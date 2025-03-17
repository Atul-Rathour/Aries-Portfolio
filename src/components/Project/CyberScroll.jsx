import React, { useRef, useState, useEffect } from "react";
import { useScrollImageSequenceFramerCanvas } from "../hooks";
import Projects from "./Projects";
import Loader from "./Loader";

// Progressive loading strategy
const CyberScroll = ({ scrollRef }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [keyframes, setKeyframes] = useState([]);
  const containerRef = useRef(null);
  
  // Image loading configuration
  const TOTAL_IMAGES = 300;
  const INITIAL_LOAD_COUNT = 20; // Load fewer images initially
  const BATCH_SIZE = 40; // Load remaining images in batches
  
  const createImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
      // Add cache control hints
      img.fetchPriority = "high"; // For the first few images
    });
  };

  // Load initial images to show something quickly
  useEffect(() => {
    const loadInitialImages = async () => {
      try {
        // Load a smaller set of images first (evenly distributed)
        const initialIndices = Array.from({ length: INITIAL_LOAD_COUNT }, (_, i) => 
          Math.floor(i * (TOTAL_IMAGES / INITIAL_LOAD_COUNT))
        );
        
        const loadedImages = await Promise.all(
          initialIndices.map(i => 
            createImage(`./images/male${(i + 1).toString().padStart(4, "0")}.webp`)
          )
        );
        
        // Create a sparse array with the loaded images
        const sparseKeyframes = new Array(TOTAL_IMAGES).fill(null);
        initialIndices.forEach((index, i) => {
          sparseKeyframes[index] = loadedImages[i];
        });
        
        // For gaps, use the nearest available image
        for (let i = 0; i < TOTAL_IMAGES; i++) {
          if (!sparseKeyframes[i]) {
            // Find the nearest loaded image
            let nearest = initialIndices.reduce((prev, curr) => 
              Math.abs(curr - i) < Math.abs(prev - i) ? curr : prev
            );
            sparseKeyframes[i] = sparseKeyframes[nearest];
          }
        }
        
        setKeyframes(sparseKeyframes);
        setLoadingProgress(INITIAL_LOAD_COUNT / TOTAL_IMAGES * 100);
        setIsLoading(false); // Allow interaction while loading remaining images
      } catch (error) {
        console.error("Failed to load initial images:", error);
        setIsLoading(false);
      }
    };

    loadInitialImages();
  }, []);

  // Load remaining images in batches
  useEffect(() => {
    if (isLoading || keyframes.length === 0) return;
    
    // Track which images still need to be loaded
    const missingIndices = [];
    for (let i = 0; i < TOTAL_IMAGES; i++) {
      // Check if this is a duplicate (placeholder) image
      const isPlaceholder = keyframes.findIndex(img => img === keyframes[i]) !== i;
      if (isPlaceholder) {
        missingIndices.push(i);
      }
    }
    
    let isMounted = true;
    const loadRemainingBatches = async () => {
      // Process in batches to avoid overwhelming the browser
      for (let i = 0; i < missingIndices.length; i += BATCH_SIZE) {
        if (!isMounted) return;
        
        const batchIndices = missingIndices.slice(i, i + BATCH_SIZE);
        try {
          const batchImages = await Promise.all(
            batchIndices.map(index => 
              createImage(`./images/male${(index + 1).toString().padStart(4, "0")}.webp`)
            )
          );
          
          if (!isMounted) return;
          
          // Update the keyframes array with the newly loaded images
          setKeyframes(prev => {
            const updated = [...prev];
            batchIndices.forEach((index, i) => {
              updated[index] = batchImages[i];
            });
            return updated;
          });
          
          // Update loading progress
          setLoadingProgress(
            (INITIAL_LOAD_COUNT + Math.min(i + BATCH_SIZE, missingIndices.length)) / TOTAL_IMAGES * 100
          );
        } catch (error) {
          console.error("Failed to load batch:", error);
        }
      }
    };
    
    loadRemainingBatches();
    
    return () => {
      isMounted = false;
    };
  }, [isLoading, keyframes]);

  const handleDrawCanvas = (img, ctx) => {
    if (!img) return;
    
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
      <div className="flex items-center justify-center flex-col h-screen">
        <Loader />
        <p className="mt-4">Loading initial frames...</p>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="h-[330rem] relative">
      <div className="sticky top-0">
        <canvas ref={canvasRef} className="absolute inset-0 block" />
        
        {/* Loading progress indicator */}
        {loadingProgress < 100 && (
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            Loading: {Math.round(loadingProgress)}%
          </div>
        )}
      </div>
      <Projects />
    </section>
  );
};

export default CyberScroll;