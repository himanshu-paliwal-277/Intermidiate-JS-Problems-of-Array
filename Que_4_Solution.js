// 4. Coding Question: Sum of Squares
// Write a JavaScript function that takes an array of numbers and returns the sum of the squares of those numbers, using  reduce

const array = [1, 2, 3, 4, 5];
const result = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue * currentValue;
}, 0);

console.log(result);

// Output: 
// 55