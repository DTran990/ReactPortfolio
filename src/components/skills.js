import { faLaptopCode, faCropAlt, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect} from 'react'
import '../css/skills.css'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div id="SkillsContainer" data-aos="fade-up">
                <div className="SkillsBox" >
                    <h2 className='boxhead'>Languages and Technology</h2>
                    <FontAwesomeIcon icon={faLaptopCode} size="5x" className='skillicon'/>
                    <p className='SkillsList'>HTML5, CSS3, JavaScript, Python, C, SASS, PHP, Java </p>
                </div>
                <div className="SkillsBox" >
                    <h2 className='boxhead'>Frameworks</h2>
                    <FontAwesomeIcon icon={faCropAlt} size="5x" className='skillicon'/>
                    <p className='SkillsList'>React.js (Redux and Router), Bootstrap, jQuery</p>
                </div>
                <div className="SkillsBox" >
                    <h2 className='boxhead'>Other</h2>
                    <FontAwesomeIcon icon={faDatabase} size="5x" className='skillicon'/>
                    <p className='SkillsList'>Linux/Unix, SQL, Git, Visual Studio, Oracle, MySQL, JSON, SEO Optimization</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
