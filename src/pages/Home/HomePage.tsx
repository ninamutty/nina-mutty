import React, { Fragment, useState } from 'react';
import Blob from './Blob';
import './HomePage.scss';
import ThemeContext from '../../context/ThemeContext';

const HomePage = (): JSX.Element => {
    // const [color, setColor] = useState('#000000');
    const [isRunning, setIsRunning] = useState(true);

    return (
        <ThemeContext.Consumer>
            {value => {
                return (
                    <div className="page-container">
                        <button onClick={() => setIsRunning(!isRunning)}>
                            {isRunning
                                ? 'Turn off animation'
                                : 'Turn on animation'}
                        </button>
                        <Fragment>
                            <Blob color={value.dark} isRunning={isRunning} />;
                            <div className="text-container">
                                <h1 className="name">Nina Mutty</h1>
                                <h4 className="title">
                                    Senior Software Engineer
                                </h4>
                            </div>
                        </Fragment>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
};

export default HomePage;
