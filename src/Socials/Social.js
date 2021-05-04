import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Socials() {
    return (
        <div className="container">
            <h1>Socials</h1>

            <div className="row mt-2 text-dark">
                <div className="built-socmed col-md-12">
                    <b>Hover me!</b> Some of the social media below has already in to this portofolio site 🎲
                </div>
                <div className="direct-socmed col-md-12">
                    <b>Hover me!</b> Some of them will be directing to the social media platform 👍
                </div>
                <div className="col-md-4 facebook">
                    <a href="https://facebook.com/eagar.satya" target="_blank">
                        <FontAwesomeIcon icon={["fab", "facebook-square"]} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 twitter">
                    <a href="https://twitter.com/eagarsatya" target="_blank">
                        <FontAwesomeIcon icon={["fab", "twitter-square"]} size="10x" />
                    </a>
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
                    <a href="https://discord.gg/u7mMmn8Nfb" target="_blank">
                        <FontAwesomeIcon icon={["fab", "discord"]} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 linkedin">
                    <a href="https://www.linkedin.com/in/eagarsatya" target="_blank">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 youtube">
                    <a href="https://www.youtube.com/channel/UCyCxqOHhLvjphUfUXr_AW9g" target="_blank">
                        <FontAwesomeIcon icon={["fab", "youtube"]} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 instagram">
                    <a href="https://instagram.com/eagarsatya" target="_blank">
                        <FontAwesomeIcon icon={["fab", "instagram-square"]} size="10x" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Socials;