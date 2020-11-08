import React, { Fragment } from 'react';
// import { ReactComponent as Portrait } from '../../images/portrait.svg';
// import TopPageContainer from '../../layout/TopPageContainer';
import Blob from './Blob';
import './HomePage.scss';
// import './exampleBlog';

const HomePage = (): JSX.Element => {
    return (
        <Fragment>
            <Blob />
            <div className="text-container">
                <h1 className="name">Nina Mutty</h1>
                <h4 className="title">Senior Software Engineer</h4>
            </div>
        </Fragment>
    );
};

export default HomePage;

{
    /* <div className="headshot-container">
                    <Portrait
                        className="portrait"
                        title="Portrait of Nina Mutty"
                    />
                </div>
                <div className="intro-container">
                    <h1 className="intro">Hi, I'm Nina!</h1>
                    <h2 className="bio">
                        I'm a Senior Software Engineer currently based in
                        Seattle, WA. Interested in chatting? Connect with me on{' '}
                        <a
                            href="https://www.linkedin.com/in/ninamutty/"
                            target="_blank"
                            title="Nina Mutty's linked in"
                        >
                            LinkedIn
                        </a>{' '}
                        or{' '}
                        <a
                            href="mailto:ninamutty@gmail.com"
                            target="_blank"
                            title="Send Nina an email"
                        >
                            send me an email
                        </a>
                        !
                    </h2>
                </div> */
}
