import React from 'react'
import '../css/project.css'


const Project = (props) => {
    const prop = props.project
    return (
        <div id="project">
            <div className="thumbnail"><a className='thumbnaillink' href={prop.SiteLink} target="_blank"  rel="noopener noreferrer"><img className='siteimg' src={window.location.origin + prop.Thumbnail} alt={prop.Name}></img></a></div>
            <div className='projectinfo'>
                <h1 className='projectTitle'>{prop.Name}</h1>
                <p className='projectDesc'>{prop.Description}</p>
                <div className='technologies'>{prop.Technology.map((tech, index) =>{
                    return (<p className='tech' key = {index}>{tech}</p>)
                })}</div>
                <div className='buttons'><a className='links' href={prop.SiteLink}>Live Site</a><a className='links' href={prop.GitLink}>Code</a></div>
            </div>
        </div>
    )
}

export default Project
