import React, { useState, useLayoutEffect } from 'react';
import Blob from './Blob';
import ThemeContext from '../../context/ThemeContext';

const BlobContainer = (): JSX.Element => {
    const [isLightMode, setIsLightMode] = useState(true);
    const darkGray = '#0F172A'
    const lightGray = '#F1F5F9'

    useLayoutEffect(() => {
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            const prefersLightMode = window.matchMedia(
                '(prefers-color-scheme: light)'
            );
            console.log(prefersLightMode.matches, "IS LIGHT MODE")
            setIsLightMode(prefersLightMode.matches ? true : false);
        }
    }, []);

    return (
        <ThemeContext.Consumer>
            {value => (
                <div className="w-screen min-h-screen justify-items-center text-center justify-center flex flex-col dark:bg-coolGray-900">
                    <Blob
                        color={isLightMode ? darkGray : lightGray}
                    />
                    <div className="z-10">
                        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl uppercase text-center font-extralight tracking-widest text-white dark:text-coolGray-900">Nina Mutty</h1>
                        <h2 className="text-sm sm:text-sm md:text-md lg:text-2xl uppercase text-center font-extralight tracking-widest text-white dark:text-coolGray-900">Senior Software Engineer</h2>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default BlobContainer;
