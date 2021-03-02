let numbersCopy = Array.of(1,2,3,4,5,6);
console.log(numbersCopy);

numbersCopy.fill(0);
console.log(numbersCopy);

numbersCopy.fill(5, 3);
console.log(numbersCopy);

numbersCopy.fill(7, 2,4);
console.log(numbersCopy);

let ones = Array(6).fill(1);
console.log(ones);
