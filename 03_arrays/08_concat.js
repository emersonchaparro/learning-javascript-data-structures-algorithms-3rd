const positivos = [1, 2, 3];
const negativos = new Array(-2, -1);

const res1 = negativos.concat(positivos);
console.log(res1);

const zero = 0;
const res2 = negativos.concat(zero);
console.log(res2);

const res3 = negativos.concat(zero, positivos);
console.log(res3);