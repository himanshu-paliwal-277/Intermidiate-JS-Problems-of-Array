// 2. Debugging Question: Fix the Filter
// Given the following code, idenfy and fix the issues to make it work as intended. It’s supposed tofilter out all negatives numbers and return a new array.

const numbers = [1, -2, 3, -4, 5];
const negative = numbers.filter(element => element < 0);
console.log(negative);
