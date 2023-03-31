import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
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
    <div className="App">
      <Navbar />
      <ParallaxProvider>
        <div
          className="Background"
          style={{ backgroundImage: `url(${photoData})` }}
        >
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default App;
