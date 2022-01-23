import React, {useEffect} from 'react'
import '../css/about.css'
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <div id="AboutSection" >
            <div id="details" data-aos="fade-up">
                <div id="About">
                    <h1>About <span>Me</span></h1>
                    <p>Based in Toronto Ontario, I am a 4th year Ryerson University student studying mathematics with a computer science specialization. I am a self-taught developer highly proficient in HTML, CSS, and Javascript with strong problem solving skills and a driven self-learner with various knowledge in different programming languages and concepts. Alongside the many computer science courses I take for school, I spend a lot of time learning and improving as a developer in my spare time. You can find my work on my <a href="https://github.com/DTran990" target="_blank" rel="noopener noreferrer">Github Profile</a>. Feel free to contact me through LinkedIn, or by Email for any inquiries.</p>
                </div>
            </div>
        </div>
    )
}

export default About
