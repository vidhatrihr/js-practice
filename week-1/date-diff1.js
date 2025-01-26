let d1 = 29;
let m1 = 12;
let y1 = 2024;

let d2 = 2;
let m2 = 1;
let y2 = 2025;

let N = 0;

while (true) {
  if (m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) {
    // 30 wale months
    if (d1 < 30) {
      N++;
      d1++;
    } else {
      // d1 is 30 (cannot increment)
      N++;
      d1 = 1;
      m1++;
    }
  } else if (m1 != 2) {
    // 31 wale months
    if (d1 < 31) {
      N++;
      d1++;
    } else {
      // d1 is 31 (cannot increment)
      N++;
      d1 = 1;
      if (m1 == 12) {
        // december
        m1 = 1;
        y1++;
      } else {
        // not december
        m1++;
      }
    }
  } else {
    // feb month
    if (d1 < 28) {
      N++;
      d1++;
    } else if (y1 % 4 == 0 && d1 == 28) {
      // leap year and 28 feb
      N++;
      d1++;
    } else {
      // not leap year or 29 feb
      N++;
      d1 = 1;
      m1++;
    }
  }
  if (y1 == y2 && m1 == m2 && d1 == d2) {
    break;
  }

  // break; // only for testing
}
console.log(N);
