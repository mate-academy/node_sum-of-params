/* eslint-disable no-console */
'use strict';

const action = process.argv[2];
const numbers = process.argv.splice(3, process.argv.length);

numbers.forEach((el, index) => {
  if (isNaN(+el)) {
    numbers.splice(index, 1);
  }
});

switch (action) {
  case 'add':
    console.log(numbers.reduce((prev, next) => Number(prev) + Number(next)));
    break;

  case 'multiply':
    console.log(numbers.reduce((prev, next) => Number(prev) * Number(next)));
    break;

  default:
    console.log('Operation is not supported!');
    break;
}
