import "./Projects.css";
import React from "react";
import self from "../../Assets/self.png";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="transBox">
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
}
