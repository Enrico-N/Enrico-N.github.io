import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';


library.add(fas)


function Navbar() {
    return (
     <div className = "Navbar">
        <div className= "container">

            
            <a href = "https://enrico-n.github.io/">
            <FontAwesomeIcon icon = "fas fa-house" size = "2x" alt = "logo" className = "Navbar-home"/>
            </a>
            
            <a href = "#" className="Toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
        

            <nav className='Navbar-menu'>
                <ul>
                    <li><a href = "https://enrico-n.github.io/" id = "About" > Abouts </a></li>
                    <li><a href = "https://enrico-n.github.io/" id = "Projects"> Projects </a></li>
                    <li><a href = "https://enrico-n.github.io/" id = "Contact"> Contact </a></li>
                </ul>
            </nav>
    
        </div>
        
    </div>
    )
    
}

export default Navbar;