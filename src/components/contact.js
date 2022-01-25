import React, { useRef, useEffect }  from 'react'
import '../css/contact.css'
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_lyoks3c", "template_73gq3rs", form.current, 'user_H1Ad5lV9SU8JGDRenSbfL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        document.getElementById('contact-form').reset();
    };
    return (
        <div id="contact">
            <div id="contactBox" data-aos="fade-down">
                <h1 id="contacthead" >Contact <span>Me</span></h1>
                <p id="contactdesc" >I'm open to new opportunities. Send me a message if you would like to chat!</p>
                <form action="#" id="contact-form" ref={form} onSubmit={sendEmail}>
                    <label for="FirstName">First Name:</label><br/>
                    <input type="text" name="FirstName" id="FirstName" placeholder="John" /><br/>
                    <label for="LastName">Last Name:</label><br/>
                    <input type="text" name="LastName" id="LastName" placeholder="Doe" /><br/>
                    <label for="email">Email Address:</label><br/>
                    <input type="email" name="email" id="email" placeholder="johndoe@hotmail.com" required/><br/>
                    <label for="messages">Message:</label><br/>
                    <textarea name="Message" id="messages" placeholder="Enter your Message" required></textarea><br/>
                    <input type="submit" id="submit" value="Send Message" />
                </form>
                <div id="contactsocials" >
                    <a className="nav-link social" id="Github" href="https://github.com/DTran990" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a><a className="nav-link social" id="Linkedin" href="https://www.linkedin.com/in/david-tran-255315166/" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a><a className="nav-link social" id="Email" href="mailto:davtran26@gmail.com" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
