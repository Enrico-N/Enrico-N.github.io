import React from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { socialMediaLinks } from "../../Portfolio";

export default function SocialMedia() {
  return (
    <div className="socialMediaIcons">
      <a
        href={socialMediaLinks.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        className="Social-Icons"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href={socialMediaLinks.github}
        target="_blank"
        rel="noreferrer noopener"
        className="Social-Icons"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
