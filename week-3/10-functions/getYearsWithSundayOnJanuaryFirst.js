function getYearsWithSundayOnJanuaryFirst() {
  let year = 1999;
  let yearsWithSundayOnJanOne = [];

  for (let i = 0; i < 51; i++) {
    year += 1;
    let janFirst = '01-01-' + year;
    janFirst = new Date(janFirst);
    if (janFirst.getDay() == 0) {
      yearsWithSundayOnJanOne.push(year);
    }
  }

  return yearsWithSundayOnJanOne;
}

console.log(getYearsWithSundayOnJanuaryFirst());
