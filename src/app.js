'use strict';
/* eslint-disable no-console */

const operation = process.argv[2];
const numberArgs = process.argv.filter(arg => Number.isFinite(+arg));

switch (operation) {
  case 'add':
    if (!numberArgs.length) {
      console.log('There is nothing to add');
    } else {
      console.log(numberArgs.reduce((acc, num) => acc + Number(num), 0));
    }

    break;
  case 'multiply':
    if (!numberArgs.length) {
      console.log('There is nothing to add');
    } else {
      console.log(numberArgs.reduce((acc, num) => acc * Number(num), 0));
    }

    break;
  default:
    console.log(`Operation is not supported!`);
    break;
}
