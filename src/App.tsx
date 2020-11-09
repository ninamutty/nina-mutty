import React, { useState, useEffect } from 'react';
import ThemeContext from './context/ThemeContext';
import HomePage from './pages/Home/HomePage';
import Navbar from './layout/Navbar';
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
                <div>
                    <Router>
                        <Navbar
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <Switch>
                            <Route path="/blog">
                                <div> BLOG </div>
                            </Route>
                            <Route path="/about">
                                <div> RESUME </div>
                            </Route>
                            <Route path="/">
                                <HomePage />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
