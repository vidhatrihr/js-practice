function capitalizeFirstLetter(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr[0].toUpperCase() + lowerStr.slice(1, lowerStr.length);
}

// console.log(capitalizeFirstLetter('STR'));

// ASSERT //

console.assert(capitalizeFirstLetter('hello') === 'Hello', 'Case 1/4');
console.assert(capitalizeFirstLetter('HELLO') === 'Hello', 'Case 2/4');
console.assert(capitalizeFirstLetter('hELLo') === 'Hello', 'Case 3/4');
console.assert(capitalizeFirstLetter('h') === 'H', 'Case 4/4');
console.log('All tests passed ✅');
