import { Circul } from "./circle";
import { Triangle } from "./triangle";
import { Square } from "./square";

export class DefineFigure {
    protected circle: Circul;
    protected triangle: Triangle;
    protected square: Square;
    constructor(...points) {
        if(points.length === 1){
            this.circle = new Circul(points)
            this.getCircle()
        } else if (points.length === 3) {
            this.triangle = new Triangle(...points)
            this.getTriangle()
        } else if (points.length === 4) {
            this.square = new Square(...points)
            this.getSquare()
        } else {
            console.warn('Please define correct number of points');
        }
    }

    getCircle(){
        return this.circle.calculateCircle();
    }

    getTriangle(){
        return this.triangle.calculateTriangle();
    }

    getSquare(){
        return this.square.calculateSquare();
    }
}