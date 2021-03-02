const n1 = [1, 2, 3, 5, 6, 7, 10, 12, 14, 15, 18];

let iterator = n1[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

iterator = n1[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}