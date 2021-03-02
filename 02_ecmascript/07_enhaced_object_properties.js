/*
//array destructuring,
let [x, y] = ['a', 'b'];
console.log(`${x}, ${y}`);
[x, y] = [y, x];
console.log(`${x}, ${y}`);

//property shorthand
let [m, n] = ['a', 'b'];
let obj = { m, n };
console.log(obj); // { x: "a", y: "b" }
*/

// Method Properties
var hello = {
  name : 'abcdef',
  printHello(){
      console.log('Hello');
  }
}
console.log(hello.printHello());