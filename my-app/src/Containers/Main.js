import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Greeting from "./Greetings/Greeting";
import "./Main.css";

export default function Main() {
  const [photoData, setPhotoData] = useState(null);
  const url = "https://api.nasa.gov/planetary/apod?api_key=";

  useEffect(() => {
    async function fetchPhoto() {
      const res = await fetch(url + `${process.env.REACT_APP_NASA_KEY}`);
      const data = await res.json();
      setPhotoData(data.hdurl);
    }
    fetchPhoto();
  }, []);

  return (
    <div className="Main">
      <Navbar />

      <div
        className="Background"
        style={{
          backgroundImage: `url(${photoData})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <Greeting />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
