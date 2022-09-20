'use strict';

/* eslint-disable no-console */
const params = process.argv.slice(3);
const action = process.argv[2];
const numbers = [];

params.forEach(item => {
  const number = Number(item);

  if (!Number.isNaN(number)) {
    numbers.push(number);
  }
});

switch (action) {
  case 'add':
    if (numbers.length === 0) {
      console.log('There is nothing to add');
      break;
    };

    const sum = numbers.reduce((acc, number) => acc + number, 0);

    console.log(sum);
    break;
  case 'multiply':
    if (numbers.length === 0) {
      console.log('There is nothing to multiply');
      break;
    };

    const multiply = numbers.reduce((acc, number) => acc * number);

    console.log(multiply);
    break;
  default:
    console.log('Operation is not supported!');
};
