'use strict';

this.add = (a, b) => +a + +b;
this.multiply = (a, b) => +a * +b;

function reducer(array, callback) {
  return array.reduce(callback);
}

const action = process.argv[2];
const numbers = process.argv
  .slice(3)
  .filter(item => !isNaN(+item));
let result = '';

if (!numbers.length) {
  result = `There is nothing to ${action}`;
} else if (action !== 'add' && action !== 'multiply') {
  result = 'Operation is not supported!';
} else {
  result = reducer(numbers, this[action]);
}

// eslint-disable-next-line no-console
console.log(result);
