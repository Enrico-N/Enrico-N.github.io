import "./Navbar.css";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { socialMediaLinks } from "../../Portfolio";

library.add(fas);

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="navbar-header">
        <a href={socialMediaLinks.portfolio}>
          <FontAwesomeIcon
            icon="fas fa-house"
            size="2x"
            alt="logo"
            className="navbar-home"
          />
        </a>

        <div className="toggle-button" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon
              icon="fas fa-x"
              size="2x"
              style={{ color: "white" }}
            />
          ) : (
            <FontAwesomeIcon
              icon="fas fa-bars"
              size="2x"
              style={{ color: "white" }}
            />
          )}
        </div>
      </div>

      <div className="navbarContainer">
        <nav className={click ? "navbar-menu.active" : "navbar-menu"}>
          <ul>
            <li>
              <a href="#about" className="nav-links" onClick={closeMenu}>
                {" "}
                About{" "}
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-links" onClick={closeMenu}>
                {" "}
                Projects{" "}
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-links" onClick={closeMenu}>
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
