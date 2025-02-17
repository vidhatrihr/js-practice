function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let lowerStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i <= lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count += 1;
    }
  }
  return count;
}

// console.log(countVowels('vidhatri'));

// ASSERT //

console.assert(countVowels('hello') === 2, 'Case 1/4');
console.assert(countVowels('aeiou') === 5, 'Case 2/4');
console.assert(countVowels('AEIOU') === 5, 'Case 3/4');
console.assert(countVowels('try') === 0, 'Case 4/4');
console.log('All tests passed ✅');
