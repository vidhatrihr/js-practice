let myIterable = {
  salary: 1000,

  // call this method to get an iterator
  [Symbol.iterator]() {
    let count = 0;
    // below is the iterator obj
    return {
      next() {
        if (count < 3) {
          count++;
          return { value: `boom${count}`, done: false };
        }
        return { value: null, done: true };
      },
    };
  },
};

let myIterator = myIterable[Symbol.iterator]();

// for (let item of myIterable) {
//   console.log(item);
// }
