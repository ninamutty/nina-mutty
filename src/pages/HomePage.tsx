import React from 'react';
import { ReactComponent as Portrait } from '../images/portrait.svg';

const HomePage = (): JSX.Element => {

    return (
        <div className="App-header">
            <div className="headshot-container">
                <Portrait className="portrait" title="Portrait of Nina Mutty" />
            </div>
            {/* <h1 className="title-name">Hi, I'm Nina!</h1> */}
        </div>
    );
};

export default HomePage;
