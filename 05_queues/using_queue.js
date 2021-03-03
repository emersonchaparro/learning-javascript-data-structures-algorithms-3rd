const Queue = require('./queue');

const queue = new Queue();
console.log(queue.isEmpty()); // outputs true

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString()); // John,Jack

console.log(queue.toString()); // John,Jack,Camila
console.log(queue.size()); // outputs 3
console.log(queue.isEmpty()); // outputs false
queue.dequeue(); // remove John
queue.dequeue(); // remove Jack
console.log(queue.toString()); // Camila