import React, { useEffect, useState } from "react";
import TransitionPage from "../components/Project/TransitionPage";
import Light from "../assets/images/grainy-light.png";
import MainLoader from "../components/MainLoader";
import { IntroPage } from "../components/Home/IntroPage";

const Project = ({ BG }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    BG(Light);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Adjust this time based on your actual loading time

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <>
        <div className="absolute w-[100vw] h-[100vh] flex justify-center items-center z-[51]  ">
          <p className="p1 absolute z-[53] text-[2.5rem] text-center">
            Hold tight ! <br />
            <span className="text-[1.3rem] tracking-wide">
              an extraordinary experience is loading just for you!
            </span>
          </p>
          <IntroPage/>
        </div>
      </>
    );
  }
  return <TransitionPage />;
};

export default Project;
