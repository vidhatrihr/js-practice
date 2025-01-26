function getLastDay(month, year) {
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    return 30;
  } else if (month != 2) {
    return 31;
  } else {
    if (year % 4 == 0) {
      return 29;
    }
    return 28;
  }
}

let d1 = 29;
let m1 = 7;
let y1 = 2025;

let d2 = 2;
let m2 = 8;
let y2 = 2025;

let N = 0;

while (true) {
  N++;

  if (d1 < getLastDay(m1, y1)) {
    d1++;
  } else {
    // d1 = 30 (for 30 days month)
    // d1 = 31 (for 31 days month)
    // d1 = 28 (for non-leap feb)
    // d1 = 29 (for leap feb)
    // CANNOT INCREMENT, MOVE TO NEXT MONTH
    d1 = 1;
    m1++;
    if (m1 == 13) {
      m1 = 1;
      y1++;
    }
  }

  if (d1 == d2 && m1 == m2 && y1 == y2) {
    break;
  }
  // break; // testing only
}
console.log({ N });
