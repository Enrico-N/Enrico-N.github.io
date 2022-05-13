import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import React,{useState} from 'react';

library.add(fas)


function Topbar() {
    return (
     <div className='Topbar'>
        <div className="HomeIcon">
            <a href="https://enrico-n.github.io/">
            <FontAwesomeIcon icon="fas fa-house" size="2x" />
            </a>
        </div>
        <div className = "Directory">
            <a href = "" > About </a>
            <a href = "" > Projects </a>
            <a href = "" > Contact </a>
        </div>
        
    </div>
    )
    
}

export default Topbar;