const isEven = require('./00_iseven');

let n1 = [1,  3, 5];
console.log(n1.some(isEven));

let n2 = [1, 3, 6, 7];
console.log(n2.some(isEven));