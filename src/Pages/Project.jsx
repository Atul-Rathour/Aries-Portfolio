import React, { useEffect, useState } from "react";
import Light from "../assets/images/grainy-light.png";
import Projects from "../components/Project/Projects";


const Project = ({ BG }) => {
  useEffect(() => {
    BG(Light);
  }, []);

  return (
    // <div className="overflow-clip">
      <Projects />
    // </div>
  );
};

export default Project;
