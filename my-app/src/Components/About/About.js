import "./About.css";
import React from "react";

import { skillsSection } from "../../Portfolio";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="transbox2">
        <h2>Tech Stack</h2>
        <div className="container">
          <ul id="dev_icons">
            {skillsSection.softwareSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// import html_logo from "./Images/html-5.svg";
// import css_logo from "./Images/css-3.svg";
// import react_logo from "./Images/react-1.svg";
// import js_logo from "./Images/javascript.svg";
// import py_logo from "./Images/python.svg";
// import java_logo from "./Images/java.svg";
// import nodejs_logo from "./Images/nodejs-icon.svg";

/* <img
                id="tech_logo"
                src={html_logo}
                alt="html-logo"
                className="responsive-icon"
              />
              <span className="caption">HTML</span>
            </div>
            <div id="tech_stack">
              <img
                id="tech_logo"
                src={css_logo}
                alt="css-logo"
                className="responsive-icon"
              />
              <span className="caption">CSS</span>
            </div>
            <div id="tech_stack">
              <img
                id="tech_logo"
                src={js_logo}
                alt="js-logo"
                className="responsive-icon"
              />
              <span className="caption">Javascript</span>
            </div>
            <div id="tech_stack">
              <img
                id="tech_logo"
                src={react_logo}
                alt="react-logo"
                className="responsive-icon"
              />
              <span className="caption">React</span>
            </div>
            <div id="tech_stack">
              <img
                id="tech_logo"
                src={py_logo}
                alt="py-logo"
                className="responsive-icon"
              />
              <span className="caption">Python</span>
            </div>
            <div id="tech_stack">
              <img
                id="tech_logo"
                src={java_logo}
                alt="java-logo"
                className="responsive-icon"
              />
              <span className="caption">Java</span>
            </div>
            <div id="tech_stack">
              <img id="tech_logo" src={nodejs_logo} alt="nodejs-logo" />
              <span className="caption">Node.js</span> */
