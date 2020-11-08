import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (): JSX.Element => {
    return (
        <nav>
            <div className="navigation-container">
                <ul className="navigation-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
                <div className="clr"></div>
            </div>
        </nav>
    );
};

export default Navbar;
