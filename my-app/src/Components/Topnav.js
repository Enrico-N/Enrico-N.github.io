import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import React,{useState} from 'react';

library.add(fas)


function Topnav() {
    return (
     <div className='Topnav'>
        <div className="HomeIcon">
            <a href="https://enrico-n.github.io/">
            <FontAwesomeIcon icon="fas fa-house" size="2x" alt="logo" />
            </a>
        </div>
        <div className = "Directory">
        <nav>
            <ul>
            <li><a href = "#" id="About" > About </a></li>
            <li><a href = "#" id="Projects"> Projects </a></li>
            <li><a href = "#" id="Blog"> Blog </a></li>
            <li><a href = "#" id="Contact"> Contact </a></li>
            </ul>
        </nav>
        </div>
        
    </div>
    )
    
}

export default Topnav;