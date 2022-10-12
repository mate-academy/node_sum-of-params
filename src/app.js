/* eslint-disable no-console */
'use strict';

const operation = process.argv[2];
const args = process.argv.slice(3).filter(item => Number(item));

if (!args.length) {
  console.log(`The is nothing to ${operation}`);
} else if (operation === 'add') {
  console.log(args.reduce((a, b) => a + b, 0));
} else if (operation === 'multiply') {
  console.log(args.reduce((a, b) => a * b, 1));
} else {
  console.log('Operation is not supported!');
}
