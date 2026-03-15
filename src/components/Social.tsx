"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { 
    faSquareFacebook, 
    faSquareTwitter, 
    faSquareGithub, 
    faGitlab, 
    faSpotify, 
    faDiscord, 
    faLinkedin, 
    faYoutube, 
    faSquareInstagram, 
    faSquareSteam 
} from '@fortawesome/free-brands-svg-icons';

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
                    <a href="https://facebook.com/eagar.satya" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareFacebook} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 twitter">
                    <a href="https://twitter.com/eagarsatya" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareTwitter} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 github">
                    <FontAwesomeIcon icon={faSquareGithub} size="10x" />
                </div>
                <div className="col-md-4 gitlab">
                    <FontAwesomeIcon icon={faGitlab} size="10x" />
                </div>
                <div className="col-md-4 spotify">
                    <Link href="/spotify" className="">
                        <FontAwesomeIcon icon={faSpotify} size="10x" />
                    </Link>
                </div>
                <div className="col-md-4 discord">
                    <a href="https://discord.gg/u7mMmn8Nfb" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDiscord} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 linkedin">
                    <a href="https://www.linkedin.com/in/eagarsatya" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 youtube">
                    <a href="https://www.youtube.com/channel/UCyCxqOHhLvjphUfUXr_AW9g" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 instagram">
                    <a href="https://instagram.com/eagarsatya" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareInstagram} size="10x" />
                    </a>
                </div>
                <div className="col-md-4 steam">
                    <a href="https://steamcommunity.com/id/extallofakind/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareSteam} size="10x" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Socials;