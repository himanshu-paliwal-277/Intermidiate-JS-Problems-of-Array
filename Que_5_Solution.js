// 5. Predict Output: forEach with a Twist
// What does the following code output?

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  if (index % 2 === 0) sum += num;
});
console.log(sum);

// Output: 
// 9