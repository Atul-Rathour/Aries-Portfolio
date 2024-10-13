import {
  type SpringOptions,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

export interface UseScrollImageSequenceFramerCanvasProps {
  onDraw: (img: HTMLImageElement, ctx: CanvasRenderingContext2D) => void;
  keyframes: HTMLImageElement[];
  scrollOptions?: Parameters<typeof useScroll>[0];
  springConfig?: SpringOptions;
}

const useScrollImageSequenceFramerCanvas = ({
  onDraw,
  keyframes,
  scrollOptions,
  springConfig = {
    damping: 50,
    stiffness: 300,
    restSpeed: 0.5,
    restDelta: 0.001,
  },
}: UseScrollImageSequenceFramerCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll(scrollOptions);
  const progress = useSpring(scrollYProgress, springConfig);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  const renderImage = useCallback(
    (progress: number) => {
      const canvas = canvasRef.current;
      if (canvas && keyframes.length > 0) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const constraint = (n: number, min = 0, max = keyframes.length - 1) =>
            Math.min(Math.max(n, min), max);
          const img = keyframes[constraint(Math.round(keyframes.length * progress))];
          if (img && img.complete && img.naturalHeight !== 0) {
            onDraw(img, ctx);
          }
        }
      }
    },
    [keyframes, onDraw],
  );

  useEffect(() => {
    const handleResize = () => {
      resizeCanvas();
      renderImage(progress.get());
    };

    handleResize(); // Initial resize and render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [progress, renderImage, resizeCanvas]);

  useEffect(() => {
    if (keyframes.length > 0) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const img = keyframes[0];
          if (img && img.complete && img.naturalHeight !== 0) {
            onDraw(img, ctx);
          }
        }
      }
    }
  }, [keyframes, onDraw]);

  useMotionValueEvent(progress, 'change', renderImage);

  return [progress, canvasRef] as const;
};

export default useScrollImageSequenceFramerCanvas;