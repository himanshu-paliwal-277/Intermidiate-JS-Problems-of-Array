// 9. Coding Question: Transforming an Array-Like Object
// Create a function that takes an array-like object with numeric keys and transforms it into a proper array.
// For example,
// {0: 'a', 1: 'b', 2: 'c', length: 3}  should be transformed into  ['a', 'b', 'c'] .

function object_to_array(obj) {
  let arr = [];
  for (let i = 0; i < obj.length; i++) {
    arr[i] = obj[i];
  }
  return arr;
}

const array_like_object = { 0: "a", 1: "b", 2: "c", length: 3 };
const result = object_to_array(array_like_object);
console.log(result);
