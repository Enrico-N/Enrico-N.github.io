import React from "react";
import { contactInfo, isHireable } from "../Portfolio";

export default function GithubProfileCard({ prof }) {
  if (isHireable) {
    prof.hirable = "Yes";
  } else {
    prof.hirable = "No";
  }
  return (
    <div className="github-main" id="contact">
      <h2 className="Title blog-title">{contactInfo.title}</h2>
      <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
    </div>
  );
}
