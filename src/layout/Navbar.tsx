import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
    return (
        <nav>
            <div className="navigation-container">
                <h1 className="navigation-name">Nina Mutty</h1>
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
