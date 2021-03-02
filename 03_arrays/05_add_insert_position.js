function numeros () {
  let numbers = [];
  for(let i = 0; i<=9; i++){
   numbers.push(i); 
  }
  return numbers;  
}

let n1 = numeros();
console.log(n1); 
n1.splice(5, 3); 
console.log(n1);
n1.splice(5, 0, 5, 6);
console.log(n1);
