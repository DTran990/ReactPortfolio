import React from 'react'
import '../css/projects.css'
import Project from './project'
import prjct from '../Objects/projectsOBJ'

const projects = () => {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div id="projectsContainer">
                {prjct.map((p,index) =>{
                    return (
                        <Project key={index} project = {p} />
                    )})}
            </div>
        </div>
    )
}

export default projects
