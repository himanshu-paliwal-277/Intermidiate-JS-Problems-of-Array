// 10. Debugging Question: Unexpected forEach Behavior
// The following code is intended to log each number mulplied by 2, but it’s not working as expected. Idenfy and fix the issue.

const numbers = [1, 2, 3, 4, 5];
let new_arr = [];
numbers.forEach((num, i) => {
    new_arr[i] = num * 2;
});
console.log(numbers);
console.log(new_arr);

// const result = numbers.map((num) => {
//     return num *= 2;
// });
// console.log(result);