import React, { useEffect, useState, useRef } from "react";
import Circle from "../../assets/images/chart-inner.png";
import A from "../../assets/images/wf-a-16-8.png";
import B from "../../assets/images/wf-b-16-8.png";
import HackerText from "../HackerText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Page2 = () => {
  const [position, setPosition] = useState(0); // Position of the bar (0% to 100%)
  const [direction, setDirection] = useState(1); // Direction of movement (1 for right, -1 for left)
  const [image, setImage] = useState(A); // Current image
  const images = [A, B]; // Array of images to alternate between
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current image

  const intervalRef = useRef(null); // Ref for the interval
  const boxRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + direction * 1; // Move by 1.5% each step

        if (newPos >= 100 || newPos <= 0) {
          setDirection(-direction); // Reverse direction when hitting bounds
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Change to the next image
        }

        return newPos < 0 ? 0 : newPos > 100 ? 100 : newPos; // Ensure position stays within bounds
      });
    }, 20); // Adjusting the interval for smooth animation

    return () => clearInterval(intervalRef.current);
  }, [direction, images.length]);

  useEffect(() => {
    setImage(images[currentIndex]); // Update the image when the index changes
  }, [currentIndex]);

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center", // Start the animation when the top of the element hits the center of the viewport
        end: "bottom top", // End the animation when the bottom of the element hits the top of the viewport
        // scrub: true,          // Smoothly sync animation with scrolling
        // markers: true,
      },
    });

    tl1.from(".test3", {
      width: 0,
      height: 0,
      duration: 1,
    });
    tl1.from(".content", {
      scale: 0,
      duration: 1,
    });

    const tl2 = gsap.timeline({
      // delay: 1,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center", // Start the animation when the top of the element hits the center of the viewport
        end: "bottom top", // End the animation when the bottom of the element hits the top of the viewport
        // scrub: true,          // Smoothly sync animation with scrolling
        markers: true,
      },
    });

    tl2.from(".circle", {
      scale: 0,
      duration: 1,
    });
    tl2.from(".num", {
      scale: 0,
    });
    tl2.set(".num",{
      x:0
    })
    tl2.from(".line", {
      width: 0,
      duration: 1,
    }),
      tl2.from(".text1", {
        y: -20,
        opacity: 0,
        duration: 0.5,
      });
    tl2.from(".text2", {
      y: 20,
      opacity: 0,
      duration: 0.5,
    });
  });
  return (
    <div>
      
      <div
        ref={boxRef}
        className="main lg:grid grid-cols-11 mobile:ms-5 mobile:me-5 gap-10 lg:ms-20 lg:me-20 mt-20"
      >
        <div className="relative flex flex-col justify-between col-span-5 ">
          <div>
            <div className="mt-3 lg:mt-0">
              <div className="absolute w-[60%] lg:w-[50%] -mt-[5rem]">
                <div className="relative flex w-full">
                  <div className="inline-flex items-center h-8 uppercase text-color-background font-black">
                    <h3 className="mr-4 text-[#66C2C5] text-[0.9rem]">
                      <HackerText text={"ABOUT"} />
                    </h3>
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
              <div className="test3 relative p-5 lg:p-6 xl:p-6 2xl:p-8 3xl:p-9">
                <div
                  className="absolute top-[50%] left-[50%] h-full bg-[#212320]/[0.6] backdrop-blur-sm "
                  style={{ transform: "translate(-50%, -50%)", width: "100%" }}
                ></div>
                <div
                  className="absolute top-0 left-0 w-4 h-full border-t border-l border-b border-[#66C2C5]"
                  //   style="opacity: 1; transform: none;"
                ></div>
                <div
                  className="absolute top-0 right-0 w-4 h-full border-t border-r border-b border-[#66C2C5]"
                  //   style="opacity: 1; transform: none;"
                ></div>
                <div className="relative content">
                  <span className="uppercase text-[0.65rem] text-[#66C2C5] leading-snug tracking-wide">
                    I am a creative and enthusiastic frontend developer and
                    designer, blending technical expertise with artistic vision
                    to craft visually stunning and highly interactive web
                    experiences. With a focus on responsive, functional design,
                    I turn complex ideas into intuitive interfaces that
                    captivate users and elevate digital solutions.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-12 xl:mt-0">
            <div className="flex items-center">
              <div
                className="circle relative flex items-center justify-center w-[11rem] lg:w-[13.5rem] xl:w-[15rem] 3xl:w-[16rem] h-auto aspect-square border border-white rounded-full"
                style={{ opacity: 1, transform: "none" }}
              >
                <img
                  src={Circle}
                  alt=""
                  className="absolute w-[90%] h-auto"
                  style={{ transform: "none" }}
                />
                <div className="absolute -top-[1px] left-0 right-0 w-[1.5rem] h-[2px] mx-auto bg-[#141414] z-10"></div>
                <div className="absolute -bottom-[1px] left-0 right-0 w-[1.5rem] h-[2px] mx-auto bg-[#141414] z-10"></div>
                <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] h-[1.5rem] my-auto bg-[#141414] z-10"></div>
                <div className="absolute top-0 bottom-0 -right-[1px] w-[2px] h-[1.5rem] my-auto bg-[#141414] z-10"></div>
                <div className="absolute -top-[0.6rem] left-0 right-0 w-[2px] h-[0.6rem] mx-auto bg-[#66C2C5] z-10"></div>
                <div className="absolute -bottom-[0.6rem] left-0 right-0 w-[2px] h-[0.6rem] mx-auto bg-[#66C2C5] z-10"></div>
                <div className="absolute top-0 bottom-0 -left-[0.6rem] w-[0.6rem] h-[2px] m-auto bg-[#66C2C5] z-10"></div>
                <div>
                  <p className="p1 text-[3.5rem]">12</p>
                </div>
              </div>
              <div className="flex-grow">
                <div
                  className="text1 ml-4 xl:ml-6 font-black text-[#66C2C5] text-[0.7rem] "
                  style={{ opacity: 1, transform: "none" }}
                >
                  PROJECTS
                </div>
                <div
                  className="line w-[100%] h-px my-3 bg-[#66C2C5]"
                  style={{ opacity: 1, width: "70%" }}
                ></div>
                <div
                  className="text2 ml-4 xl:ml-6 font-bold text-[#66C2C5] text-[0.7rem]"
                  style={{ opacity: 0.7, transform: "none" }}
                >
                  COMPLETED
                </div>
              </div>
            </div>
            <div
              className="absolute top-0 right-0 lg:-mr-4 uppercase font-bold writing-vertical-lr rotate-180 opacity-30 text-[1.7rem] lg:text-[2.3rem] xl:text-[2.7rem] 3xl:text-[2.8rem] text-[#66C2C5]"
              style={{
                opacity: 0.3,
                transform: "translateX(0px) rotate(270deg) translateZ(0px)",
                top: "34%",
                right: "-14%",
              }}
            >
              1.5 Years
            </div>
          </div>
        </div>

        <div className="col-span-1 hidden lg:flex justify-center opacity-40">
          <div className="flex flex-col w-[2.8rem] h-full overflow-hidden">
            <div className="h-[50%] w-full border-r border-[#66C2C5]"></div>
            <div className="relative h-auto w-full aspect-square">
              <div className="absolute top-[50%] left-[50%] h-[150.42%] w-px rotate-45 bg-[#66C2C5] transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="h-[45%] w-full border-l border-[#66C2C5]"></div>
          </div>
        </div>

        <div className="col-span-5">
          <div className=" relative flex items-end justify-center w-full aspect-[16/9] lg:aspect-[16/9] 2xl:aspect-[16/8] 3xl:aspect-[16/7] mt-12 lg:mt-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[#212320]/[0.6] dotted-background"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#212320]/[0.6] -z-10"></div>
            <div className="absolute top-0 w-full h-4 border-t border-r border-l border-[#66C2C5] z-10"></div>
            <div className="absolute bottom-0 w-full h-4 border-b border-r border-l border-[#66C2C5] z-10"></div>
            <div className="absolute top-0 bottom-0 left-0 w-1 h-6 my-auto bg-[#66C2C5] before:absolute before:-top-6 before:w-1 before:h-4 before:bg-[#66C2C5] after:absolute after:-bottom-6 after:w-1 after:h-4 after:bg-[#66C2C5] z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-1 h-6 my-auto bg-[#66C2C5] before:absolute before:-top-6 before:w-1 before:h-4 before:bg-[#66C2C5] after:absolute after:-bottom-6 after:w-1 after:h-4 after:bg-[#66C2C5] z-10"></div>
            <div className=" relative w-full h-full">
              <img
                src={B}
                className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                style={{ opacity: 1 }}
                alt="Background"s              />
              <img
                src={A}
                className="absolute top-0 left-0 h-full object-left-bottom object-cover transition-all duration-[20ms] ease-linear"
                style={{ width: `${position}%` }}
                alt="Overlay"
              />
            </div>
            <div
              className="absolute w-[2px] h-[calc(100%-2px)] bg-white before:absolute before:left-0 before:w-full before:h-full before:bg-white before:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-[20ms] ease-linear"
              style={{ left: `${position}%` }}
            ></div>
          </div>
          <div className="mt-12">
            <span className="cursor-pointer inline-block mr-4 uppercase font-bold text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.8rem] 3xl:text-[3rem] text-[#66C2C5]">
              <HackerText text={"Execute"} />
            </span>
            <span className="cursor-pointer inline-block mr-4 uppercase font-bold text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.8rem] 3xl:text-[3rem] text-[#66C2C5]">
              <HackerText text={"Ideas"} />
            </span>
            <span className="cursor-pointer inline-block uppercase font-bold text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.8rem] 3xl:text-[3rem] text-[#66C2C5]">
              <HackerText text={"into"} />
            </span>
            <span className="cursor-pointer inline-block uppercase font-bold text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.8rem] 3xl:text-[3rem] text-[#66C2C5]">
              <HackerText text={"application"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
