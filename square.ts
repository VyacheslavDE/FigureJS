export class Square {
    pointX: number;
    pointY: number;
    pointZ: number;
    pointD: number;
    constructor(...points){
        [this.pointX, this.pointY, this.pointZ, this.pointD] = points;
    }

    calculateSquare (){
        const result = this.pointX + this.pointY + this.pointZ + this.pointD;
        console.log(`Initialize square ${result}`);
    }
}