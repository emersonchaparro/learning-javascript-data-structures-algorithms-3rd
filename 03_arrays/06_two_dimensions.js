let a1 = [];
a1[0] = [72, 75, 79, 79, 81, 81];
a1[1] = [81, 79, 75, 75, 73, 73];

let a2 = [];
a2[0] = [];
a2[0][0] = 72;
a2[0][1] = 75;
a2[0][2] = 79;
a2[0][3] = 79;
a2[0][4] = 81;
a2[0][5] = 81;
// day 2
a2[1] = [];
a2[1][0] = 81;
a2[1][1] = 79;
a2[1][2] = 75;
a2[1][3] = 75;
a2[1][4] = 73;
a2[1][5] = 73;

console.table(a1);
console.table(a2);

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(a2);