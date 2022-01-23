import React, { useEffect } from 'react'
import '../css/projects.css'
import Project from './project'
import prjct from '../Objects/projectsOBJ'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <div id="projects">
            <h1 data-aos="fade-right" >Projects</h1>
            <div id="projectsContainer">
                {prjct.map((p,index) =>{
                    return (
                        <Project key={index} project = {p} />
                    )})}
            </div>
        </div>
    )
}

export default Projects
