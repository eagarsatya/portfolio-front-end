import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse d-flex justify-content-center">
                <ul className="navbar-nav">
                    <Link to="/social" className="">
                        <li className="nav-item">
                            <span className="nav-link">Socials <span className="sr-only">(current)</span></span>
                        </li>
                    </Link>

                    <Link to="/about" className="">
                        <li className="nav-item">
                            <span className="nav-link">🎓AllofAKind (About Me!) <span className="sr-only">(current)</span></span>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;