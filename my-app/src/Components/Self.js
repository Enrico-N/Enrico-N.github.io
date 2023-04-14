import "./Self.css";
import React from "react";
import self from "../Assets/self.png";

export default function Self() {
  return (
    <div>
      <div className="greeting-image-div">
        <img src={self} className="self" alt="greeting-img" />
      </div>
    </div>
  );
}
