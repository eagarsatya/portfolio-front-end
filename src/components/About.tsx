import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faReact, 
    faNodeJs, 
    faGithub, 
    faVuejs, 
    faGitlab 
} from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <div className="container">
            <h1>Hi Everyone!</h1>
            <div>
                <Image src="/profile.jpg" alt="my-self" className="image-holder" width={200} height={200} />
                <h2>Thomas More "Eagar Satya"</h2>
            </div>


            <div>
                <b><u>Lead Developer👨‍💻</u></b> and currently working for <b><u>PT. Accelist Lentera Indonesia</u></b>
            </div>

            <div className="col-md-12 mt-3">
                <div className="mb-2">
                    <h2>Currently Learning</h2>
                </div>
                <div className="blue-background">
                    <FontAwesomeIcon icon={faReact} size="3x" />
                    <FontAwesomeIcon icon={faNodeJs} size="3x" />
                </div>
            </div>

            <div className="col-md-12 mt-3">
                <div className="mb-2">
                    <h2>Proficient At</h2>
                </div>
                <div className="yellow-background">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                    <FontAwesomeIcon icon={faVuejs} size="3x" />
                    <FontAwesomeIcon icon={faGitlab} size="3x" />
                    <span>.NET</span>
                    <span> SQL</span>
                </div>
            </div>
        </div>
    );
}

export default About;