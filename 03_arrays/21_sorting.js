let numbers = [ 3, 9, 2, 8, 10, 6, 1, 5, 7];
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

/****************************************************/
numbers = [ 3, 9, 2, 8, 10, 6, 1, 5, 7];

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
numbers.sort(compare);

/****************************************************/
const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }, // trailing comma ES2017
  ];
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));
/****************************************************/
const names = ['Ana', 'ana', 'john', 'John']; // reset array original state
console.log(names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}));

const names2 = ['Ana', 'ana', 'john', 'John']; // reset array original state
names2.sort((a, b) => a.localeCompare(b));
console.log(names2);
