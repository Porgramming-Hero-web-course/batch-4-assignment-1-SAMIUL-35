"use strict";
const calculateShapeArea = (s) => {
    if (s.shape === "circle") {
        return parseFloat((Math.PI * s.radius * s.radius).toFixed(2));
    }
    if (s.shape === "rectangle") {
        return parseFloat((s.width * s.height).toFixed(2));
    }
    return 0;
};
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea);
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });
// console.log(rectangleArea);
