import React, { SetStateAction, Dispatch } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({
    activeTab,
    setActiveTab,
}: {
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
    return (
        <nav>
            <div className="navigation-container">
                <ul className="navigation-list">
                    <li
                        className={classNames(
                            activeTab === 'Home' ? 'active' : ''
                        )}
                    >
                        <Link to="/" onClick={() => setActiveTab('Home')}>
                            Home
                        </Link>
                    </li>
                    <li
                        className={classNames(
                            activeTab === 'About' ? 'active' : ''
                        )}
                    >
                        <Link
                            to="/resume"
                            onClick={() => setActiveTab('About')}
                        >
                            About
                        </Link>
                    </li>
                    <li
                        className={classNames(
                            activeTab === 'Blog' ? 'active' : ''
                        )}
                    >
                        <Link to="/blog" onClick={() => setActiveTab('Blog')}>
                            Blog
                        </Link>
                    </li>
                </ul>
                <div className="clr"></div>
            </div>
        </nav>
    );
};

export default Navbar;
