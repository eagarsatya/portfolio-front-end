import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <div>
            <h1>Hi Everyone!</h1>
            <div>
                <img src="./profile.jpg" alt="my-self" className="image-holder"></img>
                <h2>Thomas More "Eagar Satya"</h2>
            </div>

            <div>
                <b><u>Web Developer👨‍💻</u></b> and currently working for <b><u>PT. Accelist Lentera Indonesia</u></b>
            </div>

            <div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        Strength
                    </div>
                    <div className="col-md-6">
                        Weakness
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-6">
                        Proficient At
                        <div>
                            <FontAwesomeIcon icon={["fab", "github"]} size="6x"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        Currently Learning
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;