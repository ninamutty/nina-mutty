import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (): JSX.Element => {
    return (
        <nav>
            <div className="navigation-container">
                <ul className="navigation-list">
                    <li>
                        <NavLink exact={true} to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName="active">
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <div className="clr"></div>
            </div>
        </nav>
    );
};

export default Navbar;
