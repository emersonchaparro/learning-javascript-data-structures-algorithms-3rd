const Stack = require('./stack2');
const stack = new Stack();

stack.push(5);
stack.push(8);

console.log(Object.getOwnPropertyNames(stack)); // {1}
console.log(Object.keys(stack)); // {2}
console.log(stack.items); // {3}