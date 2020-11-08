class ExamplePoint {
    constructor(azimuth, center, radius) {
        this.center = center;
        this.radius = radius;
        this.azimuth = Math.PI - azimuth;
        this._components = {
            x: Math.cos(this.azimuth),
            y: Math.sin(this.azimuth),
        };

        this.acceleration = -0.3 + Math.random() * 0.6;
    }

    solveWith(leftPoint, rightPoint) {
        this.acceleration =
            (-0.3 * this.radialEffect +
                (leftPoint.radialEffect - this.radialEffect) +
                (rightPoint.radialEffect - this.radialEffect)) *
                this.elasticity -
            this.speed * this.friction;
    }

    set acceleration(value) {
        if (typeof value == 'number') {
            this._acceleration = value;
            this.speed += this._acceleration * 2;
        }
    }
    get acceleration() {
        return this._acceleration || 0;
    }

    set speed(value) {
        if (typeof value == 'number') {
            this._speed = value;
            this.radialEffect += this._speed * 5;
        }
    }
    get speed() {
        return this._speed || 0;
    }

    set radialEffect(value) {
        if (typeof value == 'number') {
            this._radialEffect = value;
        }
    }
    get radialEffect() {
        return this._radialEffect || 0;
    }

    get position() {
        return {
            x:
                this.center.x +
                this.components.x * (this.radius + this.radialEffect),
            y:
                this.center.y +
                this.components.y * (this.radius + this.radialEffect),
        };
    }

    get components() {
        return this._components;
    }

    set elasticity(value) {
        if (typeof value === 'number') {
            this._elasticity = value;
        }
    }
    get elasticity() {
        return this._elasticity || 0.001;
    }
    set friction(value) {
        if (typeof value === 'number') {
            this._friction = value;
        }
    }
    get friction() {
        return this._friction || 0.0085;
    }
}
export default ExamplePoint;
