import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import self from './self.png';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div className="App">
      <div className="Navbar">
      <Navbar/> 
      </div>
      <img src={self} className="self" alt="img" />

      <div className="IntroText">
        <h1>Hello, I'm Enrico</h1>
        <h2>Software Developer</h2>
      </div>

      <div id="Social-icons">
        <a href="https://www.linkedin.com/in/enrico-ng/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
        <a href="https://github.com/Enrico-N" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size= "2x"/>
        </a>
      </div>
        
    
    </div>
    
  );
}

export default App;
