import React from "react";
import Card from "./Card";
import PS5 from '../../assets/Project videos/The PS5 copy.mp4' 
import Aeroplane from '../../assets/Project videos/3D Aeroplane.mp4' 
import Island from '../../assets/Project videos/Island.mp4' 
import Iphone from '../../assets/Project videos/iphone 15.mp4' 
import Kaalchakra from '../../assets/Project videos/Kaalchakra copy.mp4' 
import Meghastra from '../../assets/Project videos/meghastra.mp4' 
import Sugandh from '../../assets/Project videos/Sugandh copy.mp4' 
import Zara from '../../assets/Project videos/Zara Home page.mp4'
import Truthify from '../../assets/Project videos/Truthify.mp4'


const projects = [
  {
    videoSrc : Zara,
    headline: "Zara Fashion App ",
    techs: ["Spring Boot","React", "MongoDB", "Redis", "Twilio", "JWT", "Tailwind"],
  },
  {
    videoSrc : Island,
    headline: "3D Island portfolio ",
    techs: ["React", "Vite", "Three.js", "React-three-fiber", "Tailwind"],
  },
  {
    videoSrc : Kaalchakra,
    headline: " KaalChakra : Space Debris",
    techs: ["HTML", "CSS", "Javascript", "Particle.js"],
  },
  {
    videoSrc : Sugandh,
    headline: "Sugandh Clothing e-commerce Website",
    techs: ["React", "CSS", "JS", "Django", "Mongodb"],
  },
  {
    videoSrc : Iphone,
    headline: "Iphone 15 titanium",
    techs: ["React", "Tailwind", "React-three-fiber", "GSAP", "Vite"],
  },
  {
    videoSrc : Meghastra,
    headline: "Meghastra : Online weather application",
    techs: ["React", "Vite", "GSAP", "Locomotive.js"],
  },
  {
    videoSrc : Aeroplane,
    headline: "3D Aeroplane Journey ",
    techs: ["React", "Vite", "GSAP", "React-three-fiber", 'Locomotive.js'],
  },
  {
    videoSrc : Truthify,
    headline: "Truthify : AI-Powered Fake News Detection System",
    techs: ["React", "Vite", "RESTful Apis", "AI/ML Apis", 'Tailwind'],
  },
  {
    videoSrc : PS5,
    headline: "Next-Gen console experience : PS5",
    techs: ["HTML", "CSS", "Js", "GSAP", 'Locomotive.js', 'Scroll Sequence', 'Scroll Trigger'],
  }
];

const Projects = () => {
  return (
    
    <div className="flex flex-col pt-[12rem] lg:ms-10 mobile:ms-4 me-10 w-[96vw] relative ">
      <div class="relative lg:absolute text-center lg:right-10 w-full mb-4 me-10 lg:mb-0 lg:w-[30%]  uppercase font-bold text-[2rem] xl:text-[2.4rem] 2xl:text-[2.6rem] text-black opacity-20 z-10">
        Crafted with thought and genuine passion
      </div>
      {projects.map((project, i) => (
        <div
          className={`flex relative w-[100%] mt-[5rem] mb-[5rem] ${
            i % 2 == 0 ? "" : "justify-end"
          } `}
        >
          <Card
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
