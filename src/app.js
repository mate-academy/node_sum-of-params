'use strict';

/* eslint-disable no-console */
const numbers = '0123456789';
const option = process.argv.slice(2);
const args = process.argv.slice(3).filter(el => numbers.includes(el))
  .map(el => +el);

switch (option[0]) {
  case 'sum':
    args.length
      ? console.log(args.reduce((el, acc) => acc + el, 0), args)
      : console.log('There is nothing to add');
    break;
  case 'multiply':
    args.length
      ? console.log(args.reduce((el, acc) => acc * el, 1), args)
      : console.log('There is nothing to multiply');
    break;
  default:
    console.log('Operation is not supported!');
}
