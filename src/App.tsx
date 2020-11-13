import React, { useState, useEffect } from 'react';
import ThemeContext from './context/ThemeContext';
import HomePage from './pages/Home/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { themes, Theme } from './themes';
import './App.css';

const App = (): JSX.Element => {
    const [theme, setTheme] = useState(themes.camp);
    const [activeTab, setActiveTab] = useState('Home');

    const getRandomTheme = (): Theme => {
        const keys = Object.keys(themes);
        const randomElement = Math.floor(Math.random() * keys.length);
        const key = keys[randomElement];
        return themes[key];
    };

    useEffect(() => {
        setTheme(getRandomTheme());
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
