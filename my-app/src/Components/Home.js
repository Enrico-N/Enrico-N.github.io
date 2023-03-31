import "./Home.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import self from "./Images/self.png";

// import Background from "./Background";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="page_1">
        {/* <div className="box"> */}
        <div className="left-column">
          <div className="IntroText">
            <h1>Hello, I'm Enrico</h1>
            <h2>Software Developer</h2>

            <a
              href="https://www.linkedin.com/in/enrico-ng/"
              target="_blank"
              rel="noreferrer"
              className="Social-icons"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/Enrico-N"
              target="_blank"
              rel="noreferrer"
              className="Social-icons"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>

        <div className="right-column">
          <div className="right-column-wrapper">
            <img src={self} className="self" alt="img" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
