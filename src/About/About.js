import React from 'react';
import '../App.scss';

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
        </div>
    );
}

export default About;