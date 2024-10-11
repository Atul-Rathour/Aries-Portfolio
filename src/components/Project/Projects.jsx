import React from "react";
import Card from "./Card";
import PS5 from '../../assets/Project videos/The PS5 copy.mp4' 
import Aeroplane from '../../assets/Project videos/3D Aeroplane.mp4' 
import Island from '../../assets/Project videos/Island.mp4' 
import Iphone from '../../assets/Project videos/iphone 15.mp4' 
import Kaalchakra from '../../assets/Project videos/Kaalchakra copy.mp4' 
import Meghastra from '../../assets/Project videos/meghastra.mp4' 
import Sugandh from '../../assets/Project videos/Sugandh copy.mp4' 

import PS5Img from "../../assets/Projects/ps5.png";
import AeroplaneImg from "../../assets/Project Images/3d Aeroplane.png";
import IslandImg from "../../assets/Project Images/3d island.png";
import IphoneImg from "../../assets/Project Images/iphone 15.png";
import KaalchakraImg from "../../assets/Project Images/KaalChakra.png";
import MeghastraImg from "../../assets/Project Images/Megahstra.png";
import SugandhImg from "../../assets/Project Images/Sugandh.png";


const projects = [
  {
    imgSrc: IslandImg,
    videoSrc : Island,
    headline: "3D Island portfolio ",
    techs: ["React", "Vite", "Three.js", "React-three-fiber", "Tailwind"],
  },
  {
    imgSrc: KaalchakraImg,
    videoSrc : Kaalchakra,
    headline: " KaalChakra : Space Debris",
    techs: ["HTML", "CSS", "Javascript", "Particle.js"],
  },
  {
    imgSrc: SugandhImg,
    videoSrc : Sugandh,
    headline: "Sugandh Clothing e-commerce Website",
    techs: ["React", "CSS", "JS", "Django", "Mongodb"],
  },
  {
    imgSrc: IphoneImg,
    videoSrc : Iphone,
    headline: "Iphone 15 titanium",
    techs: ["React", "Tailwind", "React-three-fiber", "GSAP", "Vite"],
  },
  {
    imgSrc: MeghastraImg,
    videoSrc : Meghastra,
    headline: "Meghastra : Online weather application",
    techs: ["React", "Vite", "GSAP", "Locomotive.js"],
  },
  {
    imgSrc: AeroplaneImg,
    videoSrc : Aeroplane,
    headline: "3D Aeroplane Journey ",
    techs: ["React", "Vite", "GSAP", "React-three-fiber", 'Locomotive.js'],
  },
  {
    imgSrc: PS5Img,
    videoSrc : PS5,
    headline: "Next-Gen console experience : PS5",
    techs: ["HTML", "CSS", "Js", "GSAP", 'Locomotive.js', 'Scroll Sequence', 'Scroll Trigger'],
  }
];

const Projects = () => {
  return (
    
    <div className="flex flex-col gap-[6rem] translate-y-[20rem] ms-10 me-10 w-[100vw] relative ">
      <div class="relative lg:absolute lg:-top-40 lg:right-10 w-full mb-4 me-10 lg:mb-0 lg:w-[30%]  uppercase font-bold text-[2rem] xl:text-[2.4rem] 2xl:text-[2.6rem] text-black opacity-20 z-10">
        Crafted with thought and genuine passion
      </div>
      {projects.map((project, i) => (
        <div
          className={`flex relative w-[100%] ${
            i % 2 == 0 ? "" : "justify-end"
          } `}
        >
          <Card
            imgSrc={project.imgSrc}
            videoSrc={project.videoSrc}
            headline={project.headline}
            techs={project.techs}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
