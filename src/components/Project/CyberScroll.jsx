import React, { useRef, useState, useEffect, useCallback } from "react";
import { useScrollImageSequenceFramerCanvas } from "../hooks";
import Projects from "./Projects";
import Loader from "./Loader";
import LoaderPage from "../LoaderPage";

const CyberScroll = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isSequenceLoading, setIsSequenceLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [keyframes, setKeyframes] = useState([]);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  // Configuration
  const TOTAL_IMAGES = 300;
  const INITIAL_LOAD_COUNT = 5; // Minimal for quick initial render
  const BATCH_SIZE = 20; // Smaller batches for progressive loading

  // Create ImageBitmap for faster rendering
  const createImage = async (src) => {
    try {
      const response = await fetch(src, { cache: "force-cache", priority: "high" });
      if (!response.ok) throw new Error(`Failed to fetch ${src}`);
      const blob = await response.blob();
      return await createImageBitmap(blob);
    } catch (error) {
      console.error(`Failed to load image ${src}:`, error);
      return null;
    }
  };

  // Load initial images for quick page render
  useEffect(() => {
    const loadInitialImages = async () => {
      try {
        const initialIndices = Array.from({ length: INITIAL_LOAD_COUNT }, (_, i) =>
          Math.floor(i * (TOTAL_IMAGES / INITIAL_LOAD_COUNT))
        );

        const loadedImages = await Promise.all(
          initialIndices.map((i) =>
            createImage(`/images/male${(i + 1).toString().padStart(4, "0")}.webp`)
          )
        );

        const sparseKeyframes = new Array(TOTAL_IMAGES).fill(null);
        initialIndices.forEach((index, i) => {
          if (loadedImages[i]) sparseKeyframes[index] = loadedImages[i];
        });

        // Fill gaps with nearest loaded image
        for (let i = 0; i < TOTAL_IMAGES; i++) {
          if (!sparseKeyframes[i]) {
            const nearest = initialIndices.reduce((prev, curr) =>
              Math.abs(curr - i) < Math.abs(prev - i) ? curr : prev
            );
            sparseKeyframes[i] = sparseKeyframes[nearest];
          }
        }

        setKeyframes(sparseKeyframes);
        setLoadingProgress((INITIAL_LOAD_COUNT / TOTAL_IMAGES) * 100);
        setIsInitialLoading(false);
      } catch (error) {
        console.error("Failed to load initial images:", error);
        setIsInitialLoading(false);
      }
    };

    loadInitialImages();
  }, []);

  // Load remaining images with IntersectionObserver
  useEffect(() => {
    if (isInitialLoading) return;

    const missingIndices = Array.from({ length: TOTAL_IMAGES }, (_, i) => i).filter(
      (i) => !keyframes[i] || keyframes[i] === keyframes[0]
    );

    let isMounted = true;

    const loadBatch = async (indices) => {
      const batchImages = await Promise.all(
        indices.map((index) =>
          createImage(`/images/male${(index + 1).toString().padStart(4, "0")}.webp`)
        )
      );

      if (!isMounted) return;

      setKeyframes((prev) => {
        const updated = [...prev];
        indices.forEach((index, i) => {
          if (batchImages[i]) updated[index] = batchImages[i];
        });
        return updated;
      });

      const loadedCount = TOTAL_IMAGES - missingIndices.length + indices.length;
      setLoadingProgress((loadedCount / TOTAL_IMAGES) * 100);

      if (loadedCount >= TOTAL_IMAGES) setIsSequenceLoading(false);
    };

    const loadBatches = async () => {
      for (let i = 0; i < missingIndices.length; i += BATCH_SIZE) {
        if (!isMounted) return;
        const batchIndices = missingIndices.slice(i, i + BATCH_SIZE);
        await loadBatch(batchIndices);
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadBatches();
          observerRef.current.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (containerRef.current) observerRef.current.observe(containerRef.current);

    return () => {
      isMounted = false;
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [isInitialLoading, keyframes]);

  // Optimized canvas drawing
  const handleDrawCanvas = useCallback((img, ctx) => {
    if (!img) return;

    const canvas = ctx.canvas;
    const widthRatio = canvas.width / img.width;
    const heightRatio = canvas.height / img.height;
    const ratio = Math.max(widthRatio, heightRatio);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, centerX, centerY, img.width * ratio, img.height * ratio);
  }, []);

  const [progress, canvasRef] = useScrollImageSequenceFramerCanvas({
    onDraw: handleDrawCanvas,
    keyframes,
    scrollOptions: {
      target: containerRef,
      offset: ["start", "end"],
    },
  });

  if (isInitialLoading) {
    return (
      // <div className="flex items-center justify-center flex-col h-screen">
      //   <Loader />
      //   <p className="mt-4">Loading Projects...</p>
      // </div>

      <LoaderPage />
    );
  }

  return (
    <section ref={containerRef} className="h-[100rem] relative">
      <div className="sticky top-0">
        <canvas ref={canvasRef} className="absolute inset-0 block" />
        {isSequenceLoading && (
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/80">
            <Loader />
            <p className="mt-4 text-white">Loading Sequence: {Math.round(loadingProgress)}%</p>
          </div>
        )}
      </div>
      <Projects />
    </section>
  );
};

export default CyberScroll;