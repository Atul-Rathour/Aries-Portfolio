import React from "react";
import Mark from "../../assets/images/logo-mark-stroke.png";
import Retro from "../../assets/images/retro-shape.png";
import "../temp.css";
import HackerText from "../HackerText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  useGSAP(() => {
    gsap.from(".Card", {
      y: 50,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    

  
  }, []);

  const CardAnimtion = () => {
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
    });
    tl.to(".testImg", 0.5, {
      scale: 0,
    });
    tl.to(".test", 0.5, {
      y: 50,
      opacity: 0,
      // width: '0%',
    });
    tl.to(".Card", 0.5, {
      y: -50,
      scale: 0,
      ease: "back.in",
    });
    tl.to(".Card", 0.5, {
      delay: 5,
      y: 0,
      scale: 1,
      ease: "back.in",
    });
    tl.to(".testImg", 0.5, {
      scale: 1,
    });
    tl.to(".test", 0.5, {
      y: 0,
      opacity: 1,
      // width: '0%',
    });
  
  };

  return (
    <div className="page1">
      <div
        className="Card lg:block absolute right-[30%] 2xl:right-[27%] bottom-[12%] 3xl:bottom-[15%] z-20 transition-opacity duration-500"
        style={{ transform: "translateY(13.5651px) translateZ(0px)" }}
        onMouseEnter={CardAnimtion}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        <div
          draggable="false"
          style={{
            transform: "rotate(15deg) translateZ(0px)",
            userSelect: "none",
            touchAction: "none",
          }}
        >
          <div
            className="text relative w-[280px] h-[300px] p-[15px] pb-[20px] border border-[#66C2C5] bg-[#0E100D]/[0.6] backdrop-blur-md clip-top-right"
            style={{ transform: "none", opacity: 1 }}
          >
            {/* <div className="absolute top-0 -right-[45px] w-40 h-1 rotate-[45deg] bg-[#66C2C5]"></div> */}
            <div
              className="w-[65%] h-[10px] bg-[#66C2C5] opacity-60"
              style={{
                opacity: 0.6,
                transform: "none",
                backgroundColor: "#66C2C5",
              }}
            ></div>
            <div
              className="testImg flex items-center justify-center h-[50%]"
              style={{ opacity: 1, transform: "none" }}
            >
              <img src={Retro} alt="" className="w-[65%] h-auto opacity-60" />
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div className="w-full h-[1px] border-b border-dashed border-[#66C2C5]"></div>
              <div className="flex test">
                <div className="w-[65%] h-[30px] pt-[20px]">
                  <div
                    className="w-[75%] h-[9px] bg-[#66C2C5] opacity-60"
                    style={{ backgroundColor: "#66C2C5" }}
                  ></div>
                  <div
                    className="w-[40%] h-[9px] mt-[15px] bg-[#66C2C5] opacity-60"
                    style={{ backgroundColor: "#66C2C5" }}
                  ></div>
                </div>
                <div
                  className="w-[35%] pt-[20px] border-l border-dashed border-[#66C2C5] text-center"
                  style={{ color: "#66C2C5" }}
                >
                  <div className="font-bold opacity-50">MEM %</div>
                  <div className="font-black text-[2rem]">N1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-line">
        <div
          className="absolute -top-8 xl:-top-6 hidden lg:flex items-center justify-between w-[28%]"
          style={{ color: "#66C2C5" }}
        >
          <span className="hackerText font-semibold text-[0.8rem]">
            <HackerText text={"DESIGN"} />
          </span>
          <span className="hackerText font-semibold text-[0.8rem]">
            <HackerText text={"BUILD"} />
          </span>
        </div>

        <div
          className="absolute -top-8 xl:-top-6 right-0 hidden lg:flex items-center justify-between w-[34%]"
          style={{ color: "#66C2C5" }}
        >
          <span className="hackerText font-semibold text-[0.8rem]">
            <HackerText text={"ENGAGING"} />
          </span>
          <span className="hackerText font-semibold text-[0.8rem]">
            <HackerText text={"INNOVATE"} />
          </span>
        </div>

        <div class="relative flex items-center justify-center lg:justify-between ">
          <p className="p1 lg:text-[6rem] mobile:text-[4rem]">
          <HackerText text={"ATUL"} />

          </p>

          <div class="hidden md:flex w-[25%] h-[2.8rem] -mt-[2.8rem] overflow-hidden">
            <div class="w-[40%] h-full border-b border-[#66C2C5]"></div>
            <div class="relative w-auto h-full aspect-square">
              <div class="absolute top-[50%] left-[50%] w-[141.42%] h-px -rotate-45 bg-[#66C2C5] transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
            <div class="flex-grow w-auto h-full border-t border-[#66C2C5]"></div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-between">
          <div class="hidden lg:flex w-[25%] h-[2.8rem] mt-[2.8rem] mr-8 overflow-hidden ">
            <div class="w-[40%] h-full border-b border-[#66C2C5]"></div>
            <div class="relative w-auto h-full aspect-square">
              <div class="absolute top-[50%] left-[50%] w-[141.42%] h-px -rotate-45 bg-[#66C2C5] transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
            <div class="flex-grow w-auto h-full border-t border-[#66C2C5]"></div>
          </div>
          <p className="p2 lg:text-[6rem] mobile:text-[4rem]">
          <HackerText text={"RATHOUR"} />
            </p>
        </div>
      </div>
      <img src={Mark} alt="" className="mark" />
    </div>
  );
};

export default Page1;
