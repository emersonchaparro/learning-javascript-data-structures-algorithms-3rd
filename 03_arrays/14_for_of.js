const isEven = require('./00_iseven');

const n1 = [1, 2, 3, 5, 6, 7, 10, 12, 14, 15, 18];

for(const x of n1){
  console.log(`${x} => ${isEven(x)}`);
}