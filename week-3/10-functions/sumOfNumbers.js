function sumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumOfNumbers([5, 2, 3, 4, 5]));

// ASSERT //

console.assert(sumOfNumbers([1, 2, 3, 4, 5]) === 15, 'Case 1/3');
console.assert(sumOfNumbers([10, 20, 30]) === 60, 'Case 2/3');
console.assert(sumOfNumbers([1, -1, 1, -1]) === 0, 'Case 3/3');
console.log('All tests passed ✅');
