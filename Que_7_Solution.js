// 7. Coding Question: Filtering and Accumulating
// Using  filter  and  reduce , write a funtion that takes an array of objects with properties  name and  value  and returns the sum of the values of objects whose name property starts with the letter ‘a’ or ‘A’.

const array = [
  { name: "A", value: 250 },
  { name: "H", value: 100 },
  { name: "a", value: 200 },
];

const result = array.filter((element) => {
  if (element.name.startsWith("A") || element.name.startsWith("a")) {
    return true;
  }
  return false;
}).reduce((sum, currentValue) => sum + currentValue.value ,0)

console.log(result);
