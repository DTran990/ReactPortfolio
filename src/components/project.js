import React, {useEffect} from 'react'
import '../css/project.css'
import 'aos/dist/aos.css';
import Aos from 'aos';


const Project = (props) => {
    const prop = props.project
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <div id="project" data-aos="fade-left">
            <div className="thumbnail"><a className='thumbnaillink' href={prop.SiteLink} target="_blank"  rel="noopener noreferrer"><img className='siteimg' src={window.location.origin + prop.Thumbnail} alt={prop.Name}></img></a></div>
            <div className='projectinfo'>
                <h1 className='projectTitle'>{prop.Name}</h1>
                <p className='projectDesc'>{prop.Description}</p>
                <div className='technologies'>{prop.Technology.map((tech, index) =>{
                    return (<p className='tech' key = {index}>{tech}</p>)
                })}</div>
                <div className='buttons'><a className='links' href={prop.SiteLink} target="_blank"  rel="noopener noreferrer">Live Site</a><a className='links' href={prop.GitLink} target="_blank"  rel="noopener noreferrer">Code</a></div>
            </div>
        </div>
    )
}

export default Project
