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
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const { scrollYProgress } = useScroll(scrollOptions);
  const progress = useSpring(scrollYProgress, springConfig);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    const context = canvas.getContext('2d');
    if (context) {
      contextRef.current = context;
      context.scale(dpr, dpr);
    }
  }, []);

  const renderImage = useCallback(
    (progress: number) => {
      if (!contextRef.current || keyframes.length === 0) return;
      const index = Math.min(
        Math.max(Math.round(keyframes.length * progress), 0),
        keyframes.length - 1
      );
      onDraw(keyframes[index], contextRef.current);
    },
    [keyframes, onDraw]
  );

  useEffect(() => {
    const handleResize = () => {
      resizeCanvas();
      renderImage(progress.get());
    };

    // Use requestAnimationFrame to ensure the canvas is in the DOM
    requestAnimationFrame(() => {
      resizeCanvas();
      renderImage(progress.get());
    });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [progress, renderImage, resizeCanvas]);

  useEffect(() => {
    if (keyframes.length > 0) {
      const img = keyframes[0];
      if (img.complete) {
        renderImage(0);
      } else {
        img.onload = () => renderImage(0);
      }
    }
  }, [keyframes, renderImage]);

  useMotionValueEvent(progress, 'change', renderImage);

  return [progress, canvasRef] as const;
};

export default useScrollImageSequenceFramerCanvas;