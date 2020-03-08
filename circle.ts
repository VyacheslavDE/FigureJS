export class Circul {
    pointX: number;
    constructor(...points){
        this.pointX = points[0]
    }

    calculateCircle (){
        const result = 2 * this.pointX * this.pointX * 3.14;
        console.log(`The radius of circle ${result}`);
    }
}