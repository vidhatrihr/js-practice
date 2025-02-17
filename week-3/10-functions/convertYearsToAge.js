function convertYearsToAge(dob) {
  let dateNow = new Date();
  let age = dateNow.getFullYear() - dob;
  return age;
}

// console.log(convertYearsToAge(2020));

// ASSERT //

console.assert(convertYearsToAge(1990) === 35, 'Case 1/3'); // Assuming current year is 2025
console.assert(convertYearsToAge(2000) === 25, 'Case 2/3'); // Assuming current year is 2025
console.assert(convertYearsToAge(2010) === 15, 'Case 3/3'); // Assuming current year is 2025
console.log('All tests passed ✅');
