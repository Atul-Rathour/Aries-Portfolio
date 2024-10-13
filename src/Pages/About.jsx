"use client";
import React from "react";
import { Heading } from "../components/About/Heading";
import { useMemo, useRef, useEffect } from "react";
import { useScrollImageSequenceFramerCanvas } from "../components/hooks";
import Content from "../components/About/Content";
// #1

const createImage = (src) => {
  const img = document.createElement("img");
  img.src = src;
  return img;
};
const handleDrawCanvas = (img, ctx) => {
  const canvas = ctx.canvas;
  const canvasAspect = canvas.width / canvas.height;
  const imgAspect = img.width / img.height;
  let drawWidth, drawHeight, x, y;

  if (canvasAspect > imgAspect) {
    // Canvas is wider than the image
    drawHeight = canvas.height;
    drawWidth = drawHeight * imgAspect;
    x = (canvas.width - drawWidth) / 2;
    y = 0;
  } else {
    // Canvas is taller than the image
    drawWidth = canvas.width;
    drawHeight = drawWidth / imgAspect;
    x = 0;
    y = (canvas.height - drawHeight) / 2;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, x, y, drawWidth, drawHeight);
};
const About = () => {
  const words = [
    {
      text: "Hey,",
    },

    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: " Atul Rathour.",
      className: "text-[#66C2C5] dark:text-[#66C2C5]",
    },
  ];

  const keyframes = useMemo(
    () =>
      [...new Array(180)].map((_, i) =>
        createImage(
          `./image_sequence/10${(i + 1).toString().padStart(4, "0")}.webp`
        )
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
    <section ref={containerRef} className="relative w-full">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="w-full lg:scale-[0.75] mobile:scale-[1] h-full object-contain" />
      </div>

      <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
        <Heading words={words} />
      </div>

      <div className="">
        <Content />
      </div>
    </section>

    // <section ref={containerRef} className="h-[400rem] w-[98vw] ">
    //   <div className="sticky top-0 ">
    //     <canvas ref={canvasRef} className="absolute inset-0 block scale-[0.75] mobile:scale-[0.5] lg:scale-[0.75] " />
    //   </div>

    //   <div className="flex flex-col items-center justify-center h-[40rem] mobile:translate-y-[5rem]  ">
    //     <Heading words={words} />
    //   </div>

    //   <Content/>
    // </section>
  );
};

export default About;
