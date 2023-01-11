/* eslint-disable no-console */
'use strict';

switch (process.argv[2]) {
  case 'add':
    console.log(add(process.argv.slice(3)));
    break;
  case 'multiply':
    console.log(multiply(process.argv.slice(3)));
    break;
  default:
    console.log('Operation is not supported!');
}

function add(args) {
  const numbersArgs = args.filter(argument => !isNaN(+argument));

  if (!numbersArgs.length) {
    return 'There is nothing to add';
  }

  return numbersArgs.reduce((accum, value) => {
    return accum + +value;
  }, 0);
}

function multiply(args) {
  const numbersArgs = args.filter(argument => !isNaN(+argument));

  if (!numbersArgs.length) {
    return 'There is nothing to multiply';
  }

  return numbersArgs.reduce((accum, value) => {
    return accum * +value;
  }, 1);
}
