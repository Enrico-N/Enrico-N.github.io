import "./Background.css";
import { Parallax } from "react-scroll-parallax";
import NasaPhoto from "./Images/NasaPhoto";

const Background = () => {
  return (
    <div className="background">
      <Parallax translateY={-100}>
        <NasaPhoto />
      </Parallax>
    </div>
  );
};

export default Background;
