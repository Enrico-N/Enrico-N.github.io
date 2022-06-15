import "./Projects.css";
import React from "react";
import self from "./Images/self.png";
import ScrollContainer from "react-indiana-drag-scroll";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="page_3">
        <h2>Projects</h2>
        <ScrollContainer className="scroll-container" hideScrollbars={false}>
          <a href="https://github.com/Enrico-N">
            <img src={self} alt="project 1"></img>
          </a>
          <a href="https://github.com/Enrico-N">
            <img src={self} alt="project 2"></img>
          </a>
          <a href="https://github.com/Enrico-N">
            <img src={self} alt="project 3"></img>
          </a>
          <a href="https://github.com/Enrico-N">
            <img src={self} alt="project 4"></img>
          </a>
          <a href="https://github.com/Enrico-N">
            <img src={self} alt="project 5"></img>
          </a>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Projects;
