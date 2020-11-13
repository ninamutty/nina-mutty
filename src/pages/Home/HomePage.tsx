import React, { Fragment, useState } from 'react';
import Blob from './Blob';
import './HomePage.scss';
import ThemeContext from '../../context/ThemeContext';

const HomePage = (): JSX.Element => {
    const [isRunning, setIsRunning] = useState(true);

    return (
        <ThemeContext.Consumer>
            {value => (
                <div className="page-container">
                    <button
                        className="animation-toggle"
                        style={{
                            backgroundColor: value.dark,
                        }}
                        onClick={() => setIsRunning(!isRunning)}
                    >
                        {isRunning ? 'Turn off Animation' : 'Turn on Animation'}
                    </button>
                    <Blob color={value.dark} isRunning={isRunning} />
                    <div className="text-container">
                        <h1 className="name">Nina Mutty</h1>
                        <h4 className="title">Senior Software Engineer</h4>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default HomePage;
