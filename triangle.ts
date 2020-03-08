export class Triangle {
    pointX: number;
    pointY: number;
    pointZ: number;
    constructor(...points){
        this.pointX = points[0];
        this.pointY = points[1];
        this.pointZ = points[2];
    }

    calculateTriangle (){
        const result = this.pointX + this.pointY + this.pointZ;
        console.log(`Initialize triangle ${result}`);
    }
}