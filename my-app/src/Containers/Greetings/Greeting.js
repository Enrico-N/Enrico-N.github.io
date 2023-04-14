import "./Greeting.css";
import React from "react";
import Self from "../../Components/Self";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import { greeting } from "../../Portfolio";

export default function Greeting() {
  return (
    <div className="greeting-main">
      <div className="greeting-container">
        <div className="greetingCard-main">
          <div className="introText">
            <h1>{greeting.intro}</h1>
            <h2>{greeting.title}</h2>
            <SocialMedia />
          </div>
        </div>
        <div className="greetingImg-main">
          <Self />
        </div>
      </div>
    </div>
  );
}
