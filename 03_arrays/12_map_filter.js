const isEven = require('./00_iseven');

const n1 = [1, 2, 3, 5, 6, 7, 10, 12, 14, 15, 18];

const mapEven = n1.map(isEven);
console.log(mapEven);

const filterEven = n1.filter(isEven);
console.log(filterEven);