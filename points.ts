export class Points {
    pointX: number;
    pointY: number;
    pointZ: number;
    pointD: number;
    constructor (...points) {
        this.pointX = points[0];
        this.pointY = points[1];
        this.pointZ = points[2];
        this.pointD = points[3];
    }

    getAllPoints(){
        return {x: this.pointX, y: this.pointY, z: this.pointZ, d: this.pointD}
    }
}