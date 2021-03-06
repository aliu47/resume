import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (<div className="lg:text-2xl lg:mx-32 mb-32 z-0" data-aos="fade-up" >
        <span className="text-teal-500" >
            <FontAwesomeIcon
                icon={faHandshake}
                size="4x"
            />
        </span>
        <h1 className="font-semibold text-4xl mb font-mono"data-aos="fade-up " >Contact Me</h1>
        <p className="py-4" data-aos="fade-up">
        I'd love to hear from you! Feel free to connect with me through any of these!
        <div className="grid flex grid-cols-3 lg:mx-40 pt-4" data-aos="fade-up">

        <a className="hover:text-orange-400 transition duration-500" href="mailto:aliu4@uncc.edu">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="3x" />
                </a>

        <a className="hover:text-orange-400 transition duration-500" href="https://github.com/aliu47">
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="3x" />
                </a>
                <a className="hover:text-orange-400 transition duration-500" href="https://www.linkedin.com/in/andrew-liu-964b15126/">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size="3x" />
                </a> </div>
        </p>
    </div>)
}

export default Contact