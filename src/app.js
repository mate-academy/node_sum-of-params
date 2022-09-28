'use strict';
/* eslint-disable no-console */

const operation = process.argv[2];
const numberArgs = process.argv.filter(arg => Number.isFinite(+arg));

if (!numberArgs.length) {
  console.log('There is nothing to add');
} else {
  switch (operation) {
    case 'add':
      console.log(numberArgs.reduce((acc, num) => acc + Number(num), 0));
      break;
    case 'multiply':
      console.log(numberArgs.reduce((acc, num) => acc * Number(num), 0));
      break;
    default:
      console.log(`Operation is not supported!`);
  }
}
