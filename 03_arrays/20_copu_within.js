let copyArray = [1, 2, 3, 4, 5, 6];
console.log(copyArray);

copyArray.copyWithin(0, 3);
console.log(copyArray);

copyArray = [6, 7, 8, 9, 10, 11];
copyArray.copyWithin(1, 4, 5);
console.log(copyArray);