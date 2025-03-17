import React, { useRef } from "react";
import { LoaderPageBG } from "./LoaderPageBG";

const LoaderPage = ({ loadingProgress = 0 }) => {
  const progressRef = useRef(null);
  
  return (
    <LoaderPageBG>
      <div className="absolute z-[3] text-center">
        <p className="p1 text-[2.5rem]">
          Hold tight ! <br />
          <span className="text-[1.3rem] tracking-wide">
            an extraordinary experience is loading just for you!
          </span>
        </p>
        <div className="mt-8 w-64 h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mx-auto">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <p className="text-[1rem] mt-2">{Math.round(loadingProgress)}%</p>
      </div>
    </LoaderPageBG>
  );
};

export default LoaderPage;
export { LoaderPageBG };
