'use strict';

/* eslint-disable no-console */
const numbers = '0123456789';
const option = process.argv.slice(2);
const args = process.argv.slice(3);

switch (option[0]) {
  case 'sum':
    args.length
      ? console.log(args.map(el => numbers.includes(el) ? +el : false)
        .reduce((el, acc) => acc + el, 0))
      : console.log('There is nothing to add');
    break;
  case 'multiply':
    args.length
      ? console.log([...args].map(el => numbers.includes(el) ? +el : 1)
        .reduce((el, acc) => acc * el, 1))
      : console.log('There is nothing to multiply');
    break;
  default:
    console.log('Operation is not supported!');
}
