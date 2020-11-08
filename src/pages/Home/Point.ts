import { Center } from './Blob';
class Point {
    center: Center;
    radius: number;
    azimuth: number;
    _components: {
        x: number;
        y: number;
    };
    _acceleration: number;
    _speed: number;
    _radialEffect: number;
    _friction: number;
    _elasticity: number;

    constructor(azimuth: number, center: Center, radius: number) {
        this.center = center;
        this.radius = radius;
        this.azimuth = Math.PI - azimuth;
        this._components = {
            x: Math.cos(this.azimuth),
            y: Math.sin(this.azimuth),
        };

        this._acceleration = -0.3 + Math.random() * 0.6;
        this._speed = 0;
        this._radialEffect = 0;
        this._elasticity = 0.001;
        this._friction = 0.0085;
    }

    solveWith = (leftPoint: Point, rightPoint: Point): void => {
        const acceleration =
            (-0.3 * this._radialEffect +
                (leftPoint._radialEffect - this._radialEffect) +
                (rightPoint._radialEffect - this._radialEffect)) *
                this._elasticity -
            this._speed * this._friction;

        this.setAcceleration(acceleration);
    };

    setAcceleration = (value: number): void => {
        this._acceleration = value | (-0.3 + Math.random() * 0.6);
        this._speed += this._acceleration * 2;
    };

    getAcceleration = (): number => {
        return this._acceleration;
    };

    setSpeed = (value: number): void => {
        this._speed = value;
        this._radialEffect += this._speed * 5;
    };

    getSpeed = () => {
        return this._speed;
    };

    setRadialEffect = (value: number) => {
        this._radialEffect = value;
    };

    getRadialEffect = () => {
        return this._radialEffect;
    };

    getPosition = () => {
        return {
            x:
                this.center.x +
                this._components.x * (this.radius + this._radialEffect),
            y:
                this.center.y +
                this._components.y * (this.radius + this._radialEffect),
        };
    };

    getComponents = () => {
        return this._components;
    };

    setElasticity = (value: number) => {
        this._elasticity = value;
    };
    getElasticity = () => {
        return this._elasticity;
    };

    setFriction = (value: number) => {
        this._friction = value;
    };

    getFriction = () => {
        return this._friction;
    }
}

export default Point;
