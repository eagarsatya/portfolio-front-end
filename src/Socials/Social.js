import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Socials() {
    return (
        <div className="container">
            <h1>Socials</h1>

            <div className="row">
                <div className="col-md-4 facebook">
                    <FontAwesomeIcon icon={["fab", "facebook-square"]} size="10x" />
                </div>
                <div className="col-md-4 twitter">
                    <FontAwesomeIcon icon={["fab", "twitter-square"]} size="10x" />
                </div>
                <div className="col-md-4 github">
                    <FontAwesomeIcon icon={["fab", "github-square"]} size="10x" />
                </div>
                <div className="col-md-4 gitlab">
                    <FontAwesomeIcon icon={["fab", "gitlab"]} size="10x" />
                </div>
                <div className="col-md-4 spotify">
                    <FontAwesomeIcon icon={["fab", "spotify"]} size="10x" />
                </div>
                <div className="col-md-4 discord">
                    <FontAwesomeIcon icon={["fab", "discord"]} size="10x" />
                </div>
                <div className="col-md-4 linkedin">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="10x" />
                </div>
                <div className="col-md-4 youtube">
                    <FontAwesomeIcon icon={["fab", "youtube"]} size="10x" />
                </div>
                <div className="col-md-4 instagram">
                    <FontAwesomeIcon icon={["fab", "instagram-square"]} size="10x" />
                </div>
            </div>
        </div>
    );
}

export default Socials;