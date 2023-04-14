import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { socialMediaLinks } from "../../Portfolio";

export default function SocialMedia() {
  return (
    <div>
      <a
        href={socialMediaLinks.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        className="Social-icons"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href={socialMediaLinks.github}
        target="_blank"
        rel="noreferrer noopener"
        className="Social-icons"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
