import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import './Navbar.css';



library.add(fas)


const Navbar = () => {

    const [click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
     <div className = "Navbar">
        

    
        <a href = "https://enrico-n.github.io/" >
        <FontAwesomeIcon icon = "fas fa-house" size = "2x" alt = "logo" className = "Navbar-home" />
        </a>
            
        <div className="Toggle-button" onClick={handleClick}>
          { click ?  (<FontAwesomeIcon icon = "fas fa-x" size="2x" style={{color: 'white'}} />) : (<FontAwesomeIcon icon ="fas fa-bars" size = "2x" style={{color: 'white'}} />)}
        </div>
        

        <nav className={click ? "Navbar-menu.active" : "Navbar-menu"}>
            <ul>
                <li><a href = "#about"  className='nav-links'  onClick={closeMenu}> About </a></li>
                <li><a href= "#projects"  className='nav-links'  onClick={closeMenu}> Projects </a></li>
                <li><a href= "#contact"  className='nav-links' onClick={closeMenu}> Contact </a></li>
            </ul>
        </nav>
    
        
        
    </div>
    )
    
}

export default Navbar;