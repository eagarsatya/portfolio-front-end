import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/" className="nav-home">
                <h3>🎓AllofAKind</h3>
            </Link>

            <ul className="nav-links">
                <Link to="/social" className="">
                    <li>Socials</li>
                </Link>
                <Link to="/about" className="">
                    <li>About Me</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;