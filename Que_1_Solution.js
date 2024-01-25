//1. Coding Question: Custom Map Funtion
// Implement a custom funcon  customMap  that mimics the behavior of the JavaScript Array.prototype.map  method. It should not use the built-in  map  method and should work asexpected when tested with an array.

// Normal Map Function:
// const arr = [1, 2, 3, 4, 5];
// const result = arr.map((element, index) => {
//   console.log(`Element = ${element} at index = ${index}`);
//   return element * element;
// });

// console.log(result);
// console.log(arr);

// Custom Map Function:
function custom_Map(arr, cb) {
    let new_array = [];
  for (let i = 0; i < arr.length; i++) {
    new_array[i] = cb(arr[i], i);
  }
  return new_array;
}

const array = [1, 2, 3, 4, 5];
const result = custom_Map(array, (element, index) => {
  console.log(`Element = ${element} at index = ${index}`);
  return element * element;
});

console.log(result);
console.log(array);
