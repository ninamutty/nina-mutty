import React, { useState, useEffect } from 'react';
import ThemeContext from './context/ThemeContext';
import HomePage from './pages/Home/HomePage';
import { themes, Theme } from './themes';
import './App.css';

const App = (): JSX.Element => {
    const [theme, setTheme] = useState(themes.camp);

    const getRandomTheme = (): Theme => {
        const keys = Object.keys(themes);
        const randomElement = Math.floor(Math.random() * keys.length);
        const key = keys[randomElement];
        return themes[key];
    };

    useEffect(() => {
        // const prefersLightMode = window.matchMedia(
        //     '(prefers-color-scheme: light)'
        // );
        // console.log(prefersLightMode);
        // if (prefersLightMode) {
            setTheme(getRandomTheme());
        // } else {
        //     setTheme(getRandomTheme(false));
        // }
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <HomePage />
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
