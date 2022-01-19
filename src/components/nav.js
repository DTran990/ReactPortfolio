import React, {useState, useEffect} from 'react'
import '../css/nav.css'
import { faBars, faTimes, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/logowhite.png'

const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const [navBtn, navPopUp] = useState(faBars)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
        navPopUp(toggleMenu ? faBars : faTimes)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

    }, [])

    return (
        <nav id="navbar">
            <a id="logo" href="#hero"><img src={logo} alt="DT"/></a>
            {(toggleMenu || screenWidth > 430) && (
                <div id="navlist">
                    <ul id="list">
                        <li className='listitem'>
                            <a className="nav-link" onClick={toggleNav} id="home" href="#hero">Home</a>
                        </li>
                        <li className='listitem'>
                            <a className="nav-link" onClick={toggleNav} id="Projects" href="#projects">Projects</a>
                        </li>
                        <li className='listitem'>
                            <a className="nav-link" onClick={toggleNav} id="About" href="#AboutSection">About</a>
                        </li>
                        <li className='listitem'>
                            <a className="nav-link" onClick={toggleNav} id="Contact" href="#Contact">Contact</a>
                        </li>
                        <li className='listitem'>
                            <a className="nav-link social" id="Github" href="https://github.com/DTran990" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a><a className="nav-link social" id="Linkedin" href="https://www.linkedin.com/in/david-tran-255315166/" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a><a className="nav-link social" id="Email" href="mailto:davtran26@gmail.com" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
                        </li>
                    </ul>
                </div>
            )}
            <button id="hamburgerbtn" onClick={toggleNav}><FontAwesomeIcon icon={navBtn} size="2x"/></button>
        </nav>
    )
}

export default Nav
