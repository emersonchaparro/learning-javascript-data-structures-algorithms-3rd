const isEven = require('./00_iseven');

let n1 = [1, 2, 3, 5, 6, 7, 10, 12, 14, 15, 18];

n1.forEach(x => console.log(`${x} => ${isEven(x)}`));