//1. Sum of an Array
//example: sum([3, 4, 5]); returns 12
//example: sum([10, 5, 9]); returns 24
function sum(array) {
  let total = 0;
  for(let x = 0; x < array.length; x++) {
    total += array[x];
  }
  return total;
}
//2. Average of an Array
//example: average([3, 4, 5]); returns 4
//example: average([10, 5, 9]); returns 8
function average(array) {
  let total = 0;
  for(let y = 0; y <array.length; y++) {
    total += array[y];
  }
  let average = total / array.length;
  return average
}
//3. Refactor your code to re-use a function
function refactor(array) {
  let average = sum(array) / array.length;
  return average
}
console.log(refactor([25, 50, 100]));
