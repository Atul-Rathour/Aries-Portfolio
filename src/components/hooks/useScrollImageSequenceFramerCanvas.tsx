import {
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import { throttle } from 'lodash';

export interface UseScrollImageSequenceFramerCanvasProps {
  onDraw: (img: ImageBitmap | null, ctx: CanvasRenderingContext2D) => void;
  keyframes: ImageBitmap[];
  scrollOptions?: Parameters<typeof useScroll>[0];
  springConfig?: {
    damping?: number;
    stiffness?: number;
    restSpeed?: number;
    restDelta?: number;
  };
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
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }
  }, []);

  const renderImage = useCallback(
    throttle((progress: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const constraint = (n: number, min = 0, max = keyframes.length - 1) =>
        Math.min(Math.max(n, min), max);
      const index = constraint(Math.round(keyframes.length * progress));
      onDraw(keyframes[index] || null, ctx);
    }, 16), // Throttle to ~60fps
    [keyframes, onDraw]
  );

  useEffect(() => {
    const handleResize = () => {
      resizeCanvas();
      renderImage(progress.get());
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [progress, renderImage, resizeCanvas]);

  useEffect(() => {
    if (keyframes.length > 0) {
      renderImage(0);
    }
  }, [keyframes, renderImage]);

  useMotionValueEvent(progress, 'change', renderImage);

  return [progress, canvasRef] as const;
};

export default useScrollImageSequenceFramerCanvas;