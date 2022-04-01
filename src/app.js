/* eslint-disable no-console */
'use strict';

switch (process.argv[2]) {
  case 'add':
    add(process.argv.slice(3));
    break;
  case 'multiply':
    multiply(process.argv.slice(3));
    break;
  default:
    console.log('Operation is not supported!');
}

function add(args) {
  console.log(args.reduce((accum, value) => {
    if (isNaN(+value)) {
      return +accum;
    }

    return +accum + +value;
  }, 0));
}

function multiply(args) {
  console.log(args.reduce((accum, value) => {
    if (isNaN(+value)) {
      return +accum;
    }

    return +accum * +value;
  }, 1));
}
