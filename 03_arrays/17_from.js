const isEven = require('./00_iseven');

const numbers = [1, 3, 4, 6, 7, 10, 12, 14, 15, 18];

let numbers2 = Array.from(numbers);
console.log(numbers2);

let evens = Array.from(numbers, x => isEven(x));
console.log(evens);