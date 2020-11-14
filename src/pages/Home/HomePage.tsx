import React, { useState, useLayoutEffect } from 'react';
import Blob from './Blob';
import './HomePage.scss';
import ThemeContext from '../../context/ThemeContext';

const HomePage = (): JSX.Element => {
    const [isRunning, setIsRunning] = useState(true);
    const [isLightMode, setIsLightMode] = useState(true);

    useLayoutEffect(() => {
        const prefersReduecMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );
        if (prefersReduecMotion.matches) {
            setIsRunning(false);
        }
    }, []);

    useLayoutEffect(() => {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            const prefersLightMode = window.matchMedia(
                '(prefers-color-scheme: light)'
            );
            setIsLightMode(prefersLightMode.matches ? true : false);
        }
    }, []);

    return (
        <ThemeContext.Consumer>
            {value => (
                <div className="page-container">
                    <button
                        className="animation-toggle"
                        style={
                            isLightMode
                                ? {
                                      border: `1px solid ${value.dark}`,
                                      color: value.dark,
                                  }
                                : {
                                      border: `1px solid ${value.light}`,
                                      color: value.light,
                                  }
                        }
                        onClick={() => setIsRunning(!isRunning)}
                    >
                        {isRunning ? 'Turn off Animation' : 'Turn on Animation'}
                    </button>
                    <Blob
                        color={isLightMode ? value.dark : value.light}
                        isRunning={isRunning}
                    />
                    <div className="text-container">
                        <h1 className="name">Nina Mutty</h1>
                        <h2 className="title">Senior Software Engineer</h2>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default HomePage;
