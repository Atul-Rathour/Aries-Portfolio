import React, { useState } from "react";
import MainLoader from "../MainLoader";

const Card = ({ imgSrc, videoSrc, headline, techs }) => {
  const [isLoading, setisLoading] = useState(true);
  return (
    <div class="relative mr-20 w-full xl:w-[35%] bg-white/[0.3] z-10 overflow-hidden">
      <a href="#" class="absolute top-0 left-0 w-full h-full z-10"></a>
      <div class="relative w-full h-auto aspect-[16/9] border">
        {/* <img
          src={imgSrc}
          alt=""
          class="absolute top-0 left-0 w-full h-full object-cover object-top"
        /> */}
        <div
        className="absolute h-full w-full flex justify-center items-center"
        >{isLoading && <MainLoader />}</div>

        <video
          src={videoSrc}
          onLoadedData={() => {
            setisLoading(true);
          }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>
      <div class="relative p-4 py-3 lg:p-6 text-black backdrop-blur">
        <div class="absolute left-0 bottom-0 w-8 h-8 border-l border-b border-[#66C2C5]"></div>
        <div class="absolute right-0 bottom-0 w-8 h-8 border-r border-b border-[#66C2C5]"></div>
        <div class="flex justify-between">
          <div>
            <div class="uppercase font-bold text-[.9rem]">{headline}</div>
            <div class="mt-2">
              {techs.map((tech, i) => (
                <div
                  key={i}
                  class="inline-block mb-2 lg:mb-0 mr-2 mt-[0.7rem] px-2 py-1 border border-[#66C2C5] uppercase font-semibold text-[.7rem] lg:text-[.8rem]"
                >
                  {tech}
                  {/* console.log(tech) */}
                </div>
              ))}
            </div>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="w-[1.2rem] h-[1.2rem] lg:w-[1.5rem] lg:h-[1.5rem] stroke-[0.7]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
