/* eslint-disable no-console */
'use strict';

const { calculate } = require('./calculate');

const argv = process.argv.slice(2);
const operation = argv[0];
const operands = argv.slice(1);

let numsOccurred = 0;

switch (operation) {
  case 'add':
    const sum = calculate(operands, (accum, current) => {
      numsOccurred += 1;

      return accum + current;
    });

    if (numsOccurred !== 0) {
      console.log(sum);
    } else {
      console.log('There is nothing to add');
    }

    break;
  case 'multiply':
    const product = calculate(operands, (accum, current) => {
      numsOccurred += 1;

      if (accum === 0) {
        return current;
      }

      return accum * current;
    });

    if (numsOccurred !== 0) {
      console.log(product);
    } else {
      console.log('There is nothing to multiply');
    }

    break;
  default:
    console.log('Operation is not supported!');

    break;
}
