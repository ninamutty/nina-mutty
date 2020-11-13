import React, { useLayoutEffect, useState } from 'react';
import { Theme } from '../themes';

const BackgroundBlobs = ({
    theme,
    children,
}: {
    theme: Theme;
    children: JSX.Element;
}): JSX.Element => {
    const [blobs, setBlobs] = useState<JSX.Element[]>();

    const getBlob = (
        num: number,
        blobColor: string,
        randomX: number,
        randomY: number
    ) => {
        if (num > 2) {
            return (
                <svg
                    className="background-blob"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ left: randomX, top: randomY }}
                >
                    <path
                        fill={blobColor}
                        d="M19.2,-30.7C26.2,-21.4,34.2,-17.5,40.1,-10.4C46,-3.3,49.9,7.1,48.6,17.3C47.4,27.5,41,37.5,32,42.5C23,47.4,11.5,47.3,1.1,45.8C-9.3,44.2,-18.6,41.3,-32.8,38.1C-47.1,34.8,-66.3,31.3,-73.5,21C-80.8,10.8,-76.1,-6.2,-69.6,-21.5C-63.1,-36.8,-54.8,-50.4,-42.9,-58.2C-31,-66,-15.5,-68,-4.7,-61.5C6.1,-55,12.2,-40.1,19.2,-30.7Z"
                        transform="translate(100 100)"
                    />
                </svg>
            );
        } else if (num > 1) {
            return (
                <svg
                    className="background-blob"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ left: randomX, top: randomY }}
                >
                    <path
                        fill={blobColor}
                        d="M45.8,-55.6C60.6,-52.3,74.7,-40.6,76.5,-26.8C78.3,-13.1,67.8,2.8,55.8,11.4C43.7,20.1,30.3,21.6,20.7,25.1C11.2,28.5,5.6,34,-3.9,39.3C-13.4,44.7,-26.8,50,-33.8,45.7C-40.8,41.4,-41.4,27.5,-44,15.3C-46.5,3.1,-50.9,-7.4,-50.1,-18.3C-49.4,-29.1,-43.4,-40.3,-34.2,-45.4C-24.9,-50.6,-12.5,-49.7,1.5,-51.7C15.5,-53.8,31,-58.9,45.8,-55.6Z"
                        transform="translate(100 100)"
                    />
                </svg>
            );
        } else {
            return (
                <svg
                    className="background-blob"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ left: randomX, top: randomY }}
                >
                    <path
                        fill={blobColor}
                        d="M51.8,-64.5C64.5,-62,70.5,-43.4,74.3,-25.6C78.1,-7.8,79.7,9.3,73,21.7C66.2,34.1,51.1,41.8,37.6,44.9C24,47.9,12,46.3,-3.4,51C-18.8,55.6,-37.6,66.6,-44.2,61.3C-50.8,56,-45.3,34.5,-46.8,18C-48.2,1.5,-56.7,-9.8,-58.6,-23.6C-60.4,-37.4,-55.6,-53.7,-44.7,-56.8C-33.9,-59.9,-16.9,-49.8,1.3,-51.6C19.5,-53.4,39,-67,51.8,-64.5Z"
                        transform="translate(100 100)"
                    />
                </svg>
            );
        }
    };

    useLayoutEffect(() => {
        const blobs: JSX.Element[] = [];

        for (let i = 0; i < 40; i++) {
            const themeKeys = Object.keys(theme);
            const randomThemeElement = Math.floor(
                Math.random() * themeKeys.length
            );
            const randomThemeColor = themeKeys[randomThemeElement];

            const color: string = theme[randomThemeColor];
            console.log(color, 'COLOR');

            const randomBlobNumber = Math.floor(Math.random() * 3);
            const randomX =
                Math.floor(Math.random() * window.innerWidth) -
                window.innerWidth * 0.1;
            const randomY =
                Math.floor(Math.random() * window.innerHeight) -
                window.innerHeight * 0.1;

            const randomBlob = getBlob(
                randomBlobNumber,
                randomThemeColor,
                randomX,
                randomY
            );
            blobs.push(randomBlob);
        }
        setBlobs(blobs);
    }, []);

    return (
        <div className="page-container">
            {blobs && blobs.map(blob => blob)}
            {children}
        </div>
    );
};

export default BackgroundBlobs;
