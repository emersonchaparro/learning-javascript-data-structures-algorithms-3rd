const circleArea = r => { // {1}
const PI = 3.14;
const area = PI * r * r;
return area;
};
console.log(circleArea(2));

const hello = () => console.log('hello!');
hello();