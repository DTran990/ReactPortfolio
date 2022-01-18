import React from 'react'
import Pdf from '../files/DavidTranResume.pdf';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/hero.css'

const hero = () => {
    return (
        <div id="hero">
            <div id="hero-content">
                <h1><span>Hi,</span> My name is David Tran</h1>
                <h2>Web/Software Developer</h2>
                <p>A Math and Computer Science Student from Ryerson University.</p>
                <a href={Pdf} target="_blank"  id="resumebtn" rel="noopener noreferrer">View My Resume</a>                     
            </div>
            <a id = "arrow" href="#AboutSection" className='heroArrow'><FontAwesomeIcon icon={faChevronDown} size = "2x" /></a>
        </div>
    )
}

export default hero
