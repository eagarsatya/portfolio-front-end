import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse d-flex justify-content-center">
                <ul class="navbar-nav">
                    <Link to="/social" className="">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Socials <span class="sr-only">(current)</span></a>
                        </li>
                    </Link>

                    <Link to="/" className="">
                        <li class="nav-item">
                            <a class="nav-link" href="#">🎓AllofAKind <span class="sr-only">(current)</span></a>
                        </li>
                    </Link>

                    <Link to="/about" className="">
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Me <span class="sr-only">(current)</span></a>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;