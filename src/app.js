'use strict';

const operation = process.argv[2];
const numbers = process.argv.slice(3);
let res;

if (!operation) {
  res = 'Operation is not supported!';
} else if (operation === 'add' && numbers.length > 0) {
  res = numbers.reduce((acc, cur) => {
    if (isNaN(Number(cur))) {
      return acc;
    }

    return Number(acc) + Number(cur);
  }, 0);
} else if (operation === 'multiply' && numbers.length > 0) {
  res = numbers.reduce((acc, cur) => {
    if (isNaN(Number(cur))) {
      return acc;
    }

    return Number(acc) * Number(cur);
  }, 1);
} else if (numbers.length === 0) {
  res = 'There is nothing to add (or multiply)';
}

console.log(res);
