let numbers = Array.of(1,9,0,2,8,4,5,9,3,6);

console.log(numbers.indexOf(100));
console.log(numbers.indexOf(9));
console.log(numbers.lastIndexOf(9));
console.log(numbers.includes(9));
console.log(numbers.includes(10));
console.log('**************************************');

/*****************************************/
let numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,26];
function multipleOf13(element, index, array) {
  return (element % 13 == 0);
}

console.log(numbers2.find(multipleOf13));
console.log(numbers2.findIndex(multipleOf13));

console.log('**************************************');
let numbers3 = [7,6,5,4,3,2,1];
console.log(numbers3.includes(4,5));