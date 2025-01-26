class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

class Service {
  constructor(car, date, level) {
    this.car = car;
    this.date = date;
    this.level = level;
  }
}

let xylo = new Car('xylo', 'white');
let ertiga = new Car('ertiga', 'blue');

let s1 = new Service(xylo, '2025-04-04', 'A');
let s2 = new Service(xylo, '2025-04-20', 'B');
let s3 = new Service(ertiga, '2025-04-10', 'B');
let s4 = new Service(ertiga, '2025-04-15', 'C');

let servicingRecords = [s1, s2, s3, s4];
console.log(servicingRecords);

// let cars = [xylo, ertiga, 'apple', 10];
// console.log(cars);
// // console.log(xylo);
// // console.log(ertiga);

let fruits = ['apple', 'kiwi', 'mango'];

fruits = fruits.filter(item => {
  if (item == 'apple') return false;
  return true;
});

console.log(fruits);

let array = ['apple', 'kiwi'];
console.log(array.includes('kiwi'));
