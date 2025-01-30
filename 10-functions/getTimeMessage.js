function getTimeMessage(isoString) {
  // to find day from date
  let date = isoString.split('T')[0];
  date = new Date(date);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = days[date.getDay()];

  // to find time from given clock
  let clock = isoString.split('T')[1];
  clock = clock.split(':');
  let hour = clock[0];
  let min = clock[1];

  // to find morning/afternoon/evening/night
  let time = 'morning';
  if (hour > 12) {
    time = 'afternoon';
  }
  if (hour > 17) {
    time = 'evening';
  }
  if (hour > 21) {
    time = 'night';
  }

  let meridiem = 'AM';
  if (hour > 12) {
    hour = hour % 12;
    meridiem = 'PM';
  }
  return `Today is ${day}. It's ${hour}:${min} ${meridiem}. It's ${time}.`;
}

// console.log(getTimeMessage('2025-01-26T21:15:00'));

// ASSERT //

console.assert(
  getTimeMessage('2025-01-26T10:45:00') === "Today is Sunday. It's 10:45 AM. It's morning.",
  'Case 1/4'
);
console.assert(
  getTimeMessage('2025-01-26T15:30:00') === "Today is Sunday. It's 3:30 PM. It's afternoon.",
  'Case 2/4'
);
console.assert(
  getTimeMessage('2025-01-27T21:15:00') === "Today is Monday. It's 9:15 PM. It's evening.",
  'Case 3/4'
);
console.assert(
  getTimeMessage('2025-01-27T23:00:00') === "Today is Monday. It's 11:00 PM. It's night.",
  'Case 4/4'
);
console.log('All tests passed ✅');
