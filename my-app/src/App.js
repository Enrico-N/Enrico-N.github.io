import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/> 
      <ParallaxProvider>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </ParallaxProvider>
      
    </div>
    
  );
}

export default App;
