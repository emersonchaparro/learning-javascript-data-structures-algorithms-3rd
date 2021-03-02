const { circleArea, squareArea } = require('./12_my_module'); // {2}
const { myCirle = circleArea} = require('./12_my_module'); // {2}

console.log(circleArea(2));
console.log(squareArea(2));
console.log(myCirle(4));
