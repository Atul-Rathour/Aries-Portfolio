import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-mark.png";
import HackerText from "./HackerText";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    month: "short", // "Aug"
    day: "numeric", // "28"
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Displays AM/PM
  });

  return (
    <nav className="w-full relative flex justify-between items-center text-[#66C2C5]">
      <div className="absolute top-5 lg:top-6 left-5 lg:left-10 flex flex-col items-start gap-3 z-50">
        <a href="/" className="flex justify-center items-center">
          <img
            src={logo}
            alt="Redefine Labs Logo"
            className="w-6 lg:w-8 h-auto object-contain mr-3 mobile:w-8"
          />
          <div className="lg:block uppercase font-bold text-[.9rem] ">
            <HackerText text={"Atul Rathour"} /> //
          </div>
        </a>
        <div style={{ display: "inline-block" }}>
          <span>{formattedDate}, </span>
          <span>{formattedTime}</span>
        </div>
      </div>

      <div className="absolute top-5 lg:top-6 mobile:w-[7rem]  w-[10rem] mobile:right-0 lg:right-10  z-50 text-[0.7rem]">
       
        <div className="flex gap-2 p1 text-[0.75rem] flex-col mt-2">
          <span className="flex items-center gap-2 group">
            <div
              className="w-[4px] h-[4px]  transition-all duration-800 group-hover:w-[2rem] group-hover:h-[1px]"
              style={{
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
              }}
            ></div>
            <a href="/" rel="noreferrer">
              <HackerText text={"Home"} />
            </a>
          </span>
          <span className="flex items-center gap-2 group">
            <div
              className="w-[4px] h-[4px] transition-all duration-800 group-hover:w-[2rem] group-hover:h-[1px]"
              style={{
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
              }}
            ></div>
            <a href="/Projects" rel="noreferrer">
              <HackerText text={"PROJECTS"} />
            </a>
          </span>
          <span className="flex items-center gap-2 group">
            <div
              className="w-[4px] h-[4px] transition-all duration-800 group-hover:w-[2rem] group-hover:h-[1px]"
              style={{
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
              }}
            ></div>
            <a href="/About" rel="noreferrer">
              <HackerText text={"ABOUT"} />
            </a>
          </span>
          <span className="flex items-center gap-2 group">
            <div
              className="w-[4px] h-[4px] transition-all duration-800 group-hover:w-[2rem] group-hover:h-[1px]"
              style={{
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
              }}
            ></div>
            <a href="/Contact" rel="noreferrer">
              <HackerText text={"Contact"} />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
