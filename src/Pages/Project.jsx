import React, { useEffect, useState } from "react";
import TransitionPage from "../components/Project/TransitionPage";
import Light from "../assets/images/grainy-light.png";
import MainLoader from "../components/MainLoader";

const Project = ({ BG }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    BG(Light);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000); // Adjust this time based on your actual loading time

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <>
        <div className="absolute w-[100vw] h-[100vh] flex justify-center items-center flex-col  gap-2 z-[2]  ">
          <div>
            <MainLoader />
            <p className="text-[#66C2C5] translate-y-[-2rem] text-center text-[2rem] ">
              Loading...
            </p>
          </div>
        </div>
      </>
    );
  }
  return <TransitionPage />;
};

export default Project;
