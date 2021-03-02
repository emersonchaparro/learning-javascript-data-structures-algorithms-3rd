const Stack = require('./stack1');
const myStack = new Stack();

console.log(myStack.isEmpty());

myStack.push(5);
myStack.push(8);

console.log(myStack.peek());
console.log(myStack.isEmpty());
