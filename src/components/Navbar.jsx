import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-mark.png";
import HackerText from "./HackerText";
import { Link } from "react-router-dom";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/Projects", text: "Projects" },
  { href: "/About", text: "About" },
  { href: "/Contact", text: "Contact" },
];

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
    <nav className="w-[98vw] flex absolute mt2 top-0 z-50 lg:ps-10 mobile:ps-2 sm:ps-2 justify-between pt-5 text-[#66C2C5]">
      <div className="flex flex-col items-start gap-3 z-50">
        <a href="/" className="flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-6 lg:w-8 h-auto object-contain mr-3 mobile:w-8"
          />
          <div className="lg:block uppercase font-bold text-[.9rem]">
            <HackerText text={"Atul Rathour"} /> //
          </div>
        </a>
        <div style={{ display: "inline-block" }}>
          <span>{formattedDate}, </span>
          <span>{formattedTime}</span>
        </div>
      </div>

      <div className="flex gap-2 p-1 text-[1.25rem] lg:w-[250px] mobile:w-[180px] sm:w-[200px]  tracking-wider uppercase flex-col lg:mt-2 mobile:mt-0 ">
        {navItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className="flex w-full items-center gap-3 group"
          >
            <div
              className="w-[10px] h-[10px] mobile:w-[8px] mobile:h-[8px] sm:w-[8px] sm:h-[8px] transition-all duration-500 ease-in-out group-hover:w-[5rem] group-hover:h-[1px]"
              style={{
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
              }}
            ></div>
            <p
              rel="noreferrer"
              className="block transition-transform duration-500 ease-in-out group-hover:translate-x-[1rem]"
            >
              <HackerText text={item.text} />
            </p>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
