/* eslint-disable no-console */
'use strict';

const operation = process.argv[2];
let args = process.argv.slice(3);

args = args.filter((element) => !isNaN(+element));

const add = (numbers) => {
  if (numbers.length === 0) {
    console.log('There is nothing to add');

    return;
  }

  let result = 0;

  result = numbers.reduce(
    (previousValue, currentValue) => +currentValue + previousValue,
    result,
  );

  console.log(result);
};

const multiply = (numbers) => {
  if (numbers.length === 0) {
    console.log('There is nothing to multiply');

    return;
  }

  let result = 1;

  result = numbers.reduce(
    (previousValue, currentValue) => +currentValue * previousValue,
    result,
  );

  console.log(result);
};

switch (operation) {
  case 'add':
    add(args);
    break;
  case 'multiply':
    multiply(args);
    break;
  default:
    console.log('Operation is not supported');
}
