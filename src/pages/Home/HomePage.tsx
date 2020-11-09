import React, { Fragment, useState } from 'react';
import Blob from './Blob';
import './HomePage.scss';

const HomePage = (): JSX.Element => {
    const [color, setColor] = useState('#000000');
    const [isRunning, setIsRunning] = useState(true);

    return (
        <div className="page-container">
            <Blob color={color} isRunning={isRunning} />
            <div className="text-container">
                <h1 className="name">Nina Mutty</h1>
                <h4 className="title">Senior Software Engineer</h4>
            </div>
        </div>
    );
};

export default HomePage;
