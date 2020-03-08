import { Points } from "./points";
import { DefineFigure } from "./defineFigure";

let circlePoints = new Points(5);
let circle = new DefineFigure(circlePoints.pointX);

let trianglePoints = new Points(5,6,7);
let triangle = new DefineFigure(
    trianglePoints.pointX,
    trianglePoints.pointY,
    trianglePoints.pointZ
);

let squarelePoints = new Points(5,6,7,8);
let square = new DefineFigure(
    squarelePoints.pointX,
    squarelePoints.pointY,
    squarelePoints.pointZ,
    squarelePoints.pointD
);

console.log(circle)
console.log(triangle)
console.log(square)