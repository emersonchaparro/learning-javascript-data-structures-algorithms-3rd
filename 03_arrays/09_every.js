const isEven = require('./00_iseven');

let n1 = [1, 2, 3, 4, 5];
console.log(n1.every(isEven));

let n2 = [2, 4, 6];
console.log(n2.every(isEven));