import React, { useEffect, useState } from 'react';
// import Point from './Point';
import ExamplePoint from './ExamplePoint';
import './Blob.scss';

export type Center = {
    x: number;
    y: number;
};

const Blob = (): JSX.Element => {
    const [points, setPoints] = useState<ExamplePoint[]>([]);
    const [numPoints, setNumPoints] = useState(32);
    const [divisional, setDivisional] = useState((Math.PI * 2) / numPoints);
    const [color, setColor] = useState('#000000');
    const [isRunning, setIsRunning] = useState(true);
    const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
    const [radius, setRadius] = useState(400);
    const [center, setCenter] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const canvas = document.getElementById('blob') as HTMLCanvasElement;


    // rresize canvas to be full screen
    const setupResize = () => {
        const resize = function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();
    };

    // register the mouse enter events
    const setupMouseEvents = () => {
        canvas.setAttribute('touch-action', 'none');

        let oldMousePoint = { x: 0, y: 0 };
        let hover = false;

        const mouseMove = (e: MouseEvent) => {
            let pos = center;
            let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
            let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
            let angle = 0;

            if (dist < radius && hover === false) {
                console.log('in circle?');
                let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
                angle = Math.atan2(vector.y, vector.x);
                hover = true;
            } else if (dist > radius && hover === true) {
                console.log('out circle?');
                let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
                angle = Math.atan2(vector.y, vector.x);
                hover = false;
                // color = ''
            }

            if (Math.abs(angle) > 0) {
                let nearestPoint: ExamplePoint | undefined;
                let distanceFromPoint = 100;
                points.forEach(point => {
                    if (Math.abs(angle - point.azimuth) < distanceFromPoint) {

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
                            strength.x * strength.x + strength.y * strength.y
                        ) * 10;
                    if (strengthValue > 100) strengthValue = 100;

                    nearestPoint.acceleration =
                        (strengthValue / 100) * (hover ? -1 : 1);
                }
            }

            oldMousePoint.x = e.clientX;
            oldMousePoint.y = e.clientY;
        };

        window.addEventListener('pointermove', mouseMove);
    };

    const createPoints = () => {
        for (let i = 0; i < numPoints; i++) {
            let point = new ExamplePoint(divisional * (i + 1), center, radius);
            points.push(point);
        }
    };

    const drawBlob = () => {
        const ctx = canvas.getContext('2d');

        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const pointsArray = points;
        pointsArray[0].solveWith(pointsArray[numPoints - 1], pointsArray[1]);
        let p0 = pointsArray[numPoints - 1].position;
        let p1 = pointsArray[0].position;
        let _p2 = p1;

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

        for (let i = 1; i < numPoints; i++) {
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
        requestAnimationFrame(drawBlob);
    };
    // };

    useEffect(() => {
        if (canvas && canvas.getContext && center) {
            setupResize();
            setupMouseEvents();
            createPoints();
            drawBlob();
        }
    });

    return (
        <canvas id="blob" width="1000" height="1000">
            <div className="canvas-fallBack" />
        </canvas>
    );
};

export default Blob;
