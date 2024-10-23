import React, { useState } from "react";
import "./card.css";
import Slider from "../Home/Slider2";
import Vid1 from "../../assets/video/Futuristic interface _ HUD sound effects.mp4";
import Vid2 from "../../assets/video/Signal - Technology Opener (After Effects Template) ★ AE Templates.mp4";
import Vid3 from "../../assets/video/Great Event Futuristic Launching Gimmick Video Montaj Design intro.mp4";
import Vid4 from "../../assets/video/Here is the future.mp4";
import MainLoader from "../MainLoader";

const info = [
  {
    info: ` I’m a passionate web developer and designer driven by the desire to
          push the boundaries of what’s possible online. While many websites
          today serve as simple tools for connection or work, I aim to transform
          the digital landscape by creating immersive, 3D interactive
          experiences that captivate users.`,
    vid: Vid1,
  },

  {
    info: ` I believe that websites shouldn’t just function—they should inspire,
        engage, and leave a lasting impression. My dream is to take web design
        to new heights, where users feel like they’re part of an experience, not
        just visitors.`,
    vid: Vid2,
  },

  {
    info: ` With a strong focus on blending cutting-edge 3D technology and
        interactive elements, I want to revolutionize the front-end world. I’m
        particularly excited about the role artificial intelligence can play in
        this evolution, using AI to create smarter, more dynamic interfaces that
        adapt to users in real time.`,
    vid: Vid3,
  },

  {
    info: `  This vision fuels my journey as a developer, and I’m constantly learning
        and experimenting to bring these concepts to life. I’m eager to be part
        of the future of web development—one where creativity, technology, and
        innovation come together to create the unimaginable.`,
    vid: Vid4,
  },
];

const Content = () => {
  const [isLoading, setisLoading] = useState(true);

  return (
    <div className="overflow-hidden">
      {info.map((content, i) => (
        <div className="h-[200vh] relative flex align-center mb-[5rem]" key={i}>
          <div className="absolute top-[20%] flex align-center gap-0 w-[100%]  ">
            <div class={`card ms-20`}>
              <div class="card-info">
                <p className="title">{content.info}</p>
              </div>
            </div>
            <div class="hidden md:flex w-[60%] h-[5rem] mt-[5%] overflow-hidden z-[-1] ">
              <div class="w-[50%] h-full border-b border-[#66C2C5]"></div>
              <div class="relative w-auto h-full aspect-square">
                <div class="absolute top-[50%] left-[50%] w-[141.42%] h-px -rotate-45 bg-[#66C2C5] transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
              </div>
              <div class="flex-grow w-auto h-full border-t border-[#66C2C5]"></div>
            </div>
          </div>

          <div className=" z-[-1] absolute top-[50%] ">
            <Slider />
          </div>

          <div className="absolute lg:left-[65%] top-[70%] w-[600px] mobile:left-[3%] mobile:w-[350px] h-auto z-[-1] ">
            <div className="test3 relative p-5 lg:p-6 xl:p-6 2xl:p-8 3xl:p-9">
              <div
                className="absolute top-[47%] left-[50%] h-full bg-[#212320]/[0.6] backdrop-blur-sm mobile:h-[60vh]  "
                style={{ transform: "translate(-50%, -50%)", width: "100%" }}
              ></div>
              <div
                className="absolute top-0 left-0 w-4 h-full mobile:h-[60vh] border-t border-l border-b border-[#66C2C5]"
                //   style="opacity: 1; transform: none;"
              ></div>
              <div
                className="absolute top-0 right-0 w-4 h-full mobile:h-[60vh] border-t border-r border-b border-[#66C2C5]"
                //   style="opacity: 1; transform: none;"
              ></div>
              <div className="relative content h-[56vh]">
                {isLoading && <MainLoader/>}
                <video src={content.vid}
                onLoadedData={() => {setisLoading(false)}}
                autoPlay loop muted className=" absolute top-[-3%] h-[100%] w-[100%] object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
