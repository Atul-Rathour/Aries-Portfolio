import React, { useEffect, useState } from "react";

import "./Page3.css";
import TowerCanvas from "./Tower";
import UXWebsite from "./Page3/UX&Website";
import Web3 from "./Page3/Web3";
import AI from "./Page3/AI";

const services = ["UX & Website Development", "Web3", "AI Integration"];

const Page3 = () => {
  const [selectedService, setSelectedService] = useState("AI Integration");

  // useEffect(() => {

  //   const serviceIntervalId = setInterval(() => {
  //     setSelectedService((prevService) => {
  //       const currentIndex = services.indexOf(prevService);
  //       return services[(currentIndex + 1) % services.length];
  //     });
  //   }, 5000); // Change service every 5 seconds

  //   return () => {
  //     clearInterval(serviceIntervalId);
  //   };
  // }, []);
  const renderContent = () => {
    switch (selectedService) {
      case "UX & Website Development":
        return <Web3 />;
        case "Web3":
          return <AI />;
          case "AI Integration":
        return <UXWebsite />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-6 lg:px-12 xl:px-16 2xl:px-20 py-16 lg:py-28 2xl:py-32">
      <div className="relative lg:grid lg:grid-cols-6 lg:gap-10 mt-12 lg:mt-0">
        <div className="relative col-span-4 lg:flex shrink-0 flex-col justify-center min-h-auto lg:min-h-[580px] xl:min-h-[600px] 2xl:min-h-[620px] p-5 lg:p-0 clip-corner">
          <div
            className="absolute top-0 left-0 w-full h-full grid-background"
            style={{ width: "100%" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full grid-background"
            style={{ width: "100%" }}
          ></div>
          <div className="absolute -top-12 lg:top-8 left-0 lg:left-auto lg:right-12 inline-flex items-center h-8 uppercase text-color-background font-black">
            <h3 className="mr-4 text-[#66C2C5]">What I Do</h3>
            <div className="w-4 h-4 rounded-full bg-white blur-[6px]"></div>
          </div>
          <div className="absolute top-0 left-0 w-[6%] h-auto aspect-square border-t-[2px] border-l-[2px] border-[#66C2C5]"></div>
          <div className="hidden lg:block absolute -top-[49px] -left-[49px] w-[84px] h-auto aspect-square border-r-2 border-[#66C2C5] rotate-45 "></div>
          <div className="absolute top-0 right-0 w-[6%] h-auto aspect-square border-t-[2px] border-r-[2px] border-[#66C2C5]"></div>
          <div className="hidden lg:block absolute -top-[49px] -right-[49px] w-[84px] h-auto aspect-square border-l-[2px] border-[#66C2C5] -rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-[6%] h-auto aspect-square border-b-[2px] border-l-[2px] border-[#66C2C5]"></div>
          <div className="hidden lg:block absolute -bottom-[49px] -left-[49px] w-[84px] h-auto aspect-square border-r-[2px] border-[#66C2C5] -rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-[6%] h-auto aspect-square border-b-[2px] border-r-[2px] border-[#66C2C5]"></div>
          <div className="hidden lg:block absolute -bottom-[49px] -right-[49px] w-[84px] h-auto aspect-square border-t-[2px] border-[#66C2C5] -rotate-45"></div>

          <div className="relative mb-10 mt-10 lg:left-10">
            {["UX & Website Development", "Web3", "AI Integration"].map(
              (service) => (
                <div
                  key={service}
                  className={`flex items-center mb-2 lg:mb-2 font-black uppercase cursor-pointer ${
                    selectedService === service ? "!opacity-100" : "opacity-50"
                  } text-[#66C2C5]`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative px-3 py-1 group">
                    <div
                      className={`absolute top-0 left-0 ${
                        selectedService === service
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      } h-full bg-[#66C2C5] transition-all duration-300 ease-in-out`}
                      style={{
                        clipPath:
                          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                      }}
                    ></div>
                    <p className="p1 font-normal  leading-relaxed relative z-10">
                      {service}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          {renderContent()}
        </div>

        <div className="relative flex flex-col justify-between col-span-2 ">
          <div>
            <div className="mt-3 lg:mt-0 w-[100%] h-[100%]">
              <div className="absolute w-[60%] lg:w-[50%] -mt-[5rem]"></div>
              <div className="relative flex justify-center items-center p-5 lg:p-6 xl:p-6 2xl:p-8 3xl:p-9 h-[80vh] ">
                <div className="absolute top-0 left-0 w-4 h-full border-t border-l border-b border-[#66C2C5]"></div>
                <div className="absolute top-0 right-0 w-4 h-full border-t border-r border-b border-[#66C2C5]"></div>

                <div className="relative flex justify-center items-center mobile:w-[70%] mobile:h-[70%]  lg:w-full lg:h-[100%] -top-[10%] -left-[1.5%]">
                  <TowerCanvas />
                </div>

                <p className="p1 absolute bottom-[1rem]  text-[2rem] underline leading-relaxed whitespace-nowrap">
                  CHRONO TOWER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
