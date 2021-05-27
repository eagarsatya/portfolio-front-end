import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <div className="container">
            <h1>Hi Everyone!</h1>
            <div>
                <img src="./profile.jpg" alt="my-self" className="image-holder"></img>
                <h2>Thomas More "Eagar Satya"</h2>
            </div>

            <div>
                <b><u>Web Developer👨‍💻</u></b> and currently working for <b><u>PT. Accelist Lentera Indonesia</u></b>
            </div>

            <div className="col-md-12 mt-3">
                <div className="mb-2">
                    Currently Learning
                </div>
                <div className="blue-background">
                    <FontAwesomeIcon icon={["fab", "react"]} size="3x" />
                </div>
            </div>

            <div className="col-md-12 mt-3">
                <div className="mb-2">
                    Proficient At
                </div>
                <div className="yellow-background">
                    <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                    <FontAwesomeIcon icon={["fab", "vuejs"]} size="3x" />
                    <FontAwesomeIcon icon={["fab", "gitlab"]} size="3x" />
                    <span>.NET</span>
                    <span> SQL</span>
                </div>
            </div>
        </div>
    );
}

export default About;