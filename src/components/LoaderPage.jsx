import React, { useRef } from "react";
import { LoaderPageBG } from "./LoaderPageBG";

const LoaderPage = () => {
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
      </div>
    </LoaderPageBG>
  );
};

export default LoaderPage;
export { LoaderPageBG };
