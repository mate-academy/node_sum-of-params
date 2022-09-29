/* eslint-disable no-console */
'use strict';

const argv = require('minimist')(process.argv.slice(2));
const operation = argv._[0];
const args = argv._.slice(1).filter((arg) => !isNaN(+arg));

switch (true) {
  case args.length === 0:
    console.log(`There is nothing to ${operation}`);
    break;

  case operation === 'add':
    let sum = 0;

    for (const arg of args) {
      sum += +arg;
    }

    console.log(sum);
    break;

  case operation === 'multiply':
    let product = 1;

    for (const arg of args) {
      product *= +arg;
    }

    console.log(product);
    break;

  default:
    console.log('Operation is not supported!');
}
