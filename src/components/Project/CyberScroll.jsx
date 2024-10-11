import { useMemo, useRef, useEffect } from "react";
import { useScrollImageSequenceFramerCanvas } from "../hooks";

import Projects from "./Projects";
// #1
const createImage = (src) => {
  const img = document.createElement("img");
  img.src = src;
  return img;
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
  // this method is making images array that will render in the canvas and calling the #1 function
  const keyframes = useMemo(
    () =>
      [...new Array(300)].map((_, i) =>
        createImage(`./images/male${(i + 1).toString().padStart(4, "0")}.png`)
      ),
    []
  );

  const containerRef = useRef(null);
  const [progress, canvasRef] = useScrollImageSequenceFramerCanvas({
    onDraw: handleDrawCanvas,
    keyframes: keyframes,
    scrollOptions: {
      target: containerRef,
      offset: ["start", "end"],
    },
  });

  return (
    <section ref={containerRef} className="h-[260rem]  ">
      <div className="sticky top-0">
        <canvas ref={canvasRef} className="absolute inset-0 block" />
      </div>
        <Projects/>
    </section>
  );
};

export default CyberScroll;
