import {ReadonlyVec3} from "gl-matrix";

export class Camera {
    eye: ReadonlyVec3 = [0, 0.0, 0];
    center: ReadonlyVec3 = [0, 0, 0];
    up: ReadonlyVec3 = [0, 1, 0];
    angle = 0;
    distance = 2;
    height = 0;

    constructor() {
        this.updateVectors();
        document.addEventListener('keydown', this.handleKeyDown, false);
    }

    private handleKeyDown = (e: KeyboardEvent) => {
        switch (e.code) {
            case "KeyW":
                this.distance -= 0.1;
                break;
            case "KeyS":
                this.distance += 0.1;
                break;
            case "KeyA":
                this.angle += 0.1;
                break;
            case "KeyD":
                this.angle -= 0.1;
                break;
            case "KeyR":
                this.height += 0.1;
                break;
            case "KeyF":
                this.height -= 0.1;
                break;
        }

        this.updateVectors()
    }

    private updateVectors() {
        this.distance = this.distance > 0.3 ? this.distance : 0.3;
        this.angle %= 2 * Math.PI;
        this.eye = [this.distance * Math.cos(this.angle), this.height, this.distance * Math.sin(this.angle)];
    }
}
