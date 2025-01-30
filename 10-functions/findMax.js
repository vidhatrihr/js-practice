function findMax(arr) {
  let elem = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > elem) {
      elem = arr[i];
    }
  }
  return elem;
}
// console.log(findMax([1, 2, 3, 4, 5, 100]));

// ASSERT //

console.assert(findMax([1, 2, 3, 4, 5]) === 5, 'Case 1/3');
console.assert(findMax([10, 20, 30]) === 30, 'Case 2/3');
console.assert(findMax([-1, -2, -3]) === -1, 'Case 3/3');
console.log('All tests passed ✅');
