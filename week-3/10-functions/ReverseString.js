function reverseString(string) {
  return string.split('').reverse().join('');
}

// console.log(reverseString('ab'));

// ASSERT //

console.assert(reverseString('a') === 'a', 'Case 1/5');
console.assert(reverseString('ab') === 'ba', 'Case 2/5');
console.assert(reverseString('hello') === 'olleh', 'Case 3/5');
console.assert(reverseString('hello world') === 'dlrow olleh', 'Case 4/5');
console.assert(reverseString('') === '', 'Case 5/5');
console.log('All tests passed ✅');
