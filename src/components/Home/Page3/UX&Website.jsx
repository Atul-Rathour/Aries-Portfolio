import React from "react";
import DV from '../../../assets/images/dv.png';

const UXWebsite = () => {
  return (
    <div id="UX & website" className="flex justify-center w-full z-20 flex-col">
      <div className="relative flex items-center justify-center w-full   mb-2 lg:mb-6 scale-[0.85] xl:scale-[0.9] 2xl:scale-[0.97]">
        <img src={DV} alt="" className="w-[33rem] h-auto z-20" />
        <div className="absolute w-[15.5rem] lg:w-[25.5rem] h-[3px] mt-[4rem] lg:mt-[7rem] ml-[2rem] bg-[#3E6B6D] -rotate-[30deg] z-10 overflow-hidden">
          <div
            className="w-[1rem] h-full bg-[#DFC001] ani-left absolute"
            style={{ transform: "translateX(0.4px) translateZ(0px)" }}
          ></div>
        </div>
        <div className="absolute w-[2rem] lg:w-[3.3rem] h-[3px] -mt-[0.7rem] ml-[13.5rem] lg:ml-[21rem] bg-[#3E6B6D] rotate-[30deg] overflow-hidden">
          <div
            className="w-[1rem] h-full bg-[#DFC001] absolute ani-left"
            style={{ transform: "translateX(-28px) translateZ(0px)" }}
          ></div>
        </div>
        <div className="absolute w-[2rem] lg:w-[3.3rem] h-[3px] mt-[2.5rem] lg:mt-[4.3rem] ml-[1rem] bg-[#3E6B6D] rotate-[30deg] overflow-hidden">
          <div
            className="w-[1rem] h-full bg-[#DFC001] absolute ani-top-1"
            style={{
              transform: "translateX(-38.6667px) translateZ(0px);",
            }}
          ></div>
        </div>
        <div className="absolute w-[2rem] lg:w-[3.3rem] h-[3px] mt-[8rem] lg:mt-[12.8rem] -ml-[1.5rem] lg:-ml-[2.2rem] bg-[#3E6B6D] rotate-[30deg] overflow-hidden">
          <div
            className="w-[1rem] h-full bg-[#DFC001] absolute ani-top-2"
            style={{
              transform: "translateX(38.6667px) translateZ(0px);",
            }}
          ></div>
        </div>
        <div className="absolute w-[2rem] lg:w-[3.3rem] h-[3px] mt-[9.5rem] lg:mt-[16rem] mr-[11rem] lg:mr-[19.5rem] bg-[#3E6B6D] rotate-[30deg] overflow-hidden">
          <div
            className="w-[1rem] h-full bg-[#DFC001] absolute ani-top-3    "
            style={{ transform: "translateX(-23.2px) translateZ(0px);" }}
          ></div>
        </div>
      </div>

      <div className="relative mobile:ms-5 mobile:me-5  flex items-center justify-center lg:ms-40 mt-5 lg:me-40 text-center text-[#66C2C5]">
        Going with the technologies that going to change the web world
      </div>
    </div>
  );
};

export default UXWebsite;
