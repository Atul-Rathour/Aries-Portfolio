import React from "react";
import './MainLoader.css'

const MainLoader = () => {
  return (
    <div class="pyramid-loader">
      <div class="wrapper">
        <span class="side side1"></span>
        <span class="side side2"></span>
        <span class="side side3"></span>
        <span class="side side4"></span>
        <span class="shadow"></span>
      </div>
    </div>
  );
};

export default MainLoader;
