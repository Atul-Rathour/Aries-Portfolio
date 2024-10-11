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
    // <div>
    //   <div className="sticky top-0">
    //     <canvas ref={canvasRef} className="absolute inset-0 block" />
    //   </div>
    //   <div className="flex flex-col items-center justify-center h-[40rem]  ">
    //     {/* <TypewriterEffectSmooth words={words} /> */}
    //     <Heading words={words} />
    //   </div>
    // </div>
    <section ref={containerRef} className="h-[800vh] w-[98vw] ">
      <div className="sticky top-0 ">
        <canvas ref={canvasRef} className="absolute inset-0 block scale-[0.75] mobile:scale-[0.5] lg:scale-[0.75] " />
      </div>
      
      <div className="flex flex-col items-center justify-center h-[40rem] mobile:translate-y-[5rem]  ">
        <Heading words={words} />
      </div>

      <Content/>
    </section>
  );
};

export default About;


// <section ref={containerRef} className="relative w-full">
// <div className="sticky top-0 w-full h-screen overflow-hidden">
//   <canvas ref={canvasRef} className="w-full h-full" />
// </div>

// <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
//   <Heading words={words} />
// </div>

// <div className="">
//   <Content/>
// </div>
// </section>