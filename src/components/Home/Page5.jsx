import React from "react";
import { BallCanvas } from "./Ball";

import css from "../../assets/tech/css.png";
import docker from "../../assets/tech/docker.png";
import figma from "../../assets/tech/figma.png";
import git from "../../assets/tech/git.png";
import html from "../../assets/tech/html.png";
import javascript from "../../assets/tech/javascript.png";
import mongodb from "../../assets/tech/mongodb.png";
import nodejs from "../../assets/tech/nodejs.png";
import reactjs from "../../assets/tech/reactjs.png";
import redux from "../../assets/tech/redux.png";
import tailwind from "../../assets/tech/tailwind.png";
import typescript from "../../assets/tech/typescript.png";
import threejs from "../../assets/tech/threejs.svg";

const Page5 = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  return (
    <div className= "z-10  mt-20">
      <div className="absolute w-[60%] lg:w-[50%] -mt-[5rem] ms-10 me-10 mobile:ms-2">
        <div className="relative flex w-full">
          <div className="inline-flex items-center h-8 uppercase text-color-background font-black">
            <h3 className="mr-4 text-[#66C2C5] text-[1.5rem] font-light">Teachnologies</h3>
            <div className="w-4 h-4 rounded-full bg-white blur-[6px]"></div>
          </div>
          <div className="flex flex-grow h-[4rem] mt-4 overflow-hidden opacity-30">
            <div
              className="h-full border-t border-[#66C2C5]"
              style={{ width: "45%" }}
            ></div>
            <div className="relative w-auto h-full aspect-square">
              <div className="absolute top-[50%] left-[50%] w-[141.42%] h-px rotate-45 bg-[#66C2C5] transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[2px] bg-[#66C2C5] ms-0"></div>
      <div className="flex flex-row flex-wrap justify-center gap-10 lg:ml-60 lg:mr-60 mobile:ml-5 mobile:mr-5 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
