function sortStringAlphabetically(str) {
  return str.split('').sort().join('');
}

// console.log(sortStringAlphabetically('str'));

// ASSERT //

console.assert(sortStringAlphabetically('banana') === 'aaabnn', 'Case 1/6');
console.assert(sortStringAlphabetically('aPple') === 'Paelp', 'Case 2/6');
console.assert(sortStringAlphabetically('ZyWx') === 'WZxy', 'Case 3/6');
console.assert(sortStringAlphabetically('15432') === '12345', 'Case 4/6');
console.assert(sortStringAlphabetically('a1b2c3') === '123abc', 'Case 5/6');
console.assert(sortStringAlphabetically('hello world') === ' dehllloorw', 'Case 6/6');
console.log('All tests passed ✅');
