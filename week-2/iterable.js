let array = [1, 23, 45, 67];
console.log(array);

// array.forEach(num => {
//   console.log(num);
// });

let set = new Set([1, 23, 46, 23, 46, 79]);
console.log(set);

// set.forEach(num => {
//   console.log(num);
// });

for (let num of array) {
  console.log(num);
}

for (let num of set) {
  console.log(num);
}
