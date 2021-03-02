let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
numbers[numbers.length] = 10;
console.log(numbers);
numbers.push(11);
console.log(numbers);
numbers.push(12, 13);
console.log(numbers);

numbers.unshift(-1);
console.log(numbers);
numbers.unshift(-3, -2);
console.log(numbers);
