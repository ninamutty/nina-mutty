import React, { useEffect, useState, useLayoutEffect } from 'react';
import ExamplePoint from './ExamplePoint';

export type Center = {
    x: number;
    y: number;
};

const Blob = ({
    color,
    isRunning,
}: {
    color: string;
    isRunning: boolean;
}): JSX.Element => {
    const NUM_POINTS = 32;
    const DIVISIONAL = (Math.PI * 2) / NUM_POINTS;

    const [radius, setRadius] = useState(
        document.documentElement.clientHeight >
            document.documentElement.clientWidth
            ? document.documentElement.clientWidth * 0.45
            : document.documentElement.clientHeight * 0.45
    );
    const [center, setCenter] = useState({
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2,
    });

    useEffect(() => {
        let requestId: number;
        let mouseMove: () => void;
        let timeoutResize: () => void;
        const points: ExamplePoint[] = [];

        const canvas = document.getElementById('blob') as HTMLCanvasElement;

        if (canvas && canvas.getContext && center) {
            // resize canvas to be full screen
            const resize = function() {
                canvas.width = document.documentElement.clientWidth;
                canvas.height = document.documentElement.clientHeight;

                if (
                    center.x !== canvas.width / 2 ||
                    center.y !== canvas.height / 2
                ) {
                    setCenter({
                        x: canvas.width / 2,
                        y: canvas.height / 2,
                    });

                    const newRadius =
                        canvas.width > canvas.height
                            ? canvas.height * 0.4
                            : canvas.width * 0.4;
                    setRadius(newRadius);
                }
            };

            let timeout = false;
            const delta = 200;

            const resizeend = (rtime: number) => {
                if (Date.now() - rtime < delta) {
                    setTimeout(resizeend, delta);
                } else {
                    timeout = false;
                    resize();
                }
            };

            timeoutResize = () => {
                const rtime = Date.now();
                if (timeout === false) {
                    timeout = true;
                    setTimeout(() => resizeend(rtime), delta);
                }
            };
            window.addEventListener('resize', timeoutResize);
            // window.addEventListener('orientationchange', timeoutResize)
            resize();

            // create points to animate
            const createPoints = () => {
                for (let i = 0; i < NUM_POINTS; i++) {
                    let point = new ExamplePoint(
                        DIVISIONAL * (i + 1),
                        center,
                        radius
                    );
                    points.push(point);
                }
            };

            // register the mouse enter events
            canvas.setAttribute('touch-action', 'none');

            let oldMousePoint = { x: 0, y: 0 };
            let hover = false;

            const mouseMove = (e: MouseEvent) => {
                let pos = center;
                let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
                let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
                let angle = 0;

                if (dist < radius && hover === false) {
                    // we're inside the blob
                    let vector = {
                        x: e.clientX - pos.x,
                        y: e.clientY - pos.y,
                    };
                    angle = Math.atan2(vector.y, vector.x);
                    hover = true;
                } else if (dist > radius && hover === true) {
                    // we're outside the blob
                    let vector = {
                        x: e.clientX - pos.x,
                        y: e.clientY - pos.y,
                    };
                    angle = Math.atan2(vector.y, vector.x);
                    hover = false;
                }

                // figure out if we've cross the blob boundary, if we have animate points
                if (Math.abs(angle) > 0) {
                    let nearestPoint: ExamplePoint | undefined;
                    let distanceFromPoint = 100;
                    points.forEach(point => {
                        if (
                            Math.abs(angle - point.azimuth) < distanceFromPoint
                        ) {
                            nearestPoint = point;
                            distanceFromPoint = Math.abs(angle - point.azimuth);
                        }
                    });

                    if (nearestPoint) {
                        const strength = {
                            x: oldMousePoint.x - e.clientX,
                            y: oldMousePoint.y - e.clientY,
                        };
                        let strengthValue =
                            Math.sqrt(
                                strength.x * strength.x +
                                    strength.y * strength.y
                            ) * 10;
                        if (strengthValue > 100) strengthValue = 100;

                        nearestPoint.acceleration =
                            (strengthValue / 100) * (hover ? -1 : 1);
                    }
                }

                oldMousePoint.x = e.clientX;
                oldMousePoint.y = e.clientY;
            };

            const drawBlob = () => {
                const ctx = canvas.getContext('2d');

                if (!ctx) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const pointsArray = points;
                pointsArray[0].solveWith(
                    pointsArray[NUM_POINTS - 1],
                    pointsArray[1]
                );
                let p0 = pointsArray[NUM_POINTS - 1].position;
                let p1 = pointsArray[0].position;
                let _p2 = p1;

                ctx.beginPath();
                ctx.moveTo(center.x, center.y);
                ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

                // draw the points
                for (let i = 1; i < NUM_POINTS; i++) {
                    pointsArray[i].solveWith(
                        pointsArray[i - 1],
                        pointsArray[i + 1] || pointsArray[0]
                    );

                    let p2 = pointsArray[i].position;
                    var xc = (p1.x + p2.x) / 2;
                    var yc = (p1.y + p2.y) / 2;
                    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
                    ctx.fillStyle = color;

                    p1 = p2;
                }

                var xc = (p1.x + _p2.x) / 2;
                var yc = (p1.y + _p2.y) / 2;
                ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.strokeStyle = color;

                if (isRunning) {
                    requestId = requestAnimationFrame(drawBlob);
                }
            };

            window.addEventListener('pointermove', mouseMove);

            createPoints();
            drawBlob();
        }
        return () => {
            cancelAnimationFrame(requestId);
            window.removeEventListener('resize', timeoutResize);
            window.removeEventListener('pointermove', mouseMove);
        };
    });

    const size =
        document.documentElement.clientHeight >
        document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : document.documentElement.clientHeight;
    return (
        <canvas className="blob" id="blob" width={size} height={size}>
            <div
                className="canvas-fallBack"
                style={{
                    backgroundColor: color,
                }}
            />
        </canvas>
    );
};

export default Blob;
