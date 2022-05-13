import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import React,{useState} from 'react';

library.add(fas)


function Navbar() {
    return (
     <div className = "Navbar">
        <div className = "container">

        
            <a href = "https://enrico-n.github.io/">
            <FontAwesomeIcon icon = "fas fa-house" size = "2x" alt = "logo" className="HomeIcon" />
            </a>
        

            <nav>
                <ul>
                    <li><a href = "#" id = "About" > About12 </a></li>
                    <li><a href = "#" id = "Projects"> Projects </a></li>
                    <li><a href = "#" id = "Blog"> Blog </a></li>
                    <li><a href = "#" id = "Contact"> Contact </a></li>
                </ul>
            </nav>
    
        </div>
        
    </div>
    )
    
}

export default Navbar;