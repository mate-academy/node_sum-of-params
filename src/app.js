'use strict';

const numbers = '123456789';
const option = process.argv.splice(2, 1).toString();
const args = process.argv.slice(2)
  .filter(char => numbers.includes(char))
  .map(number => +number);

switch (option) {
  case 'add':
    args.length
      ? console.log(args.reduce((a, b) => a + b))
      : console.log('There is nothing to add');
    break;

  case 'multiply':
    args.length
      ? console.log(args.reduce((a, b) => a * b))
      : console.log('There is nothing to add');
    break;

  default:
    console.log('Operation is not supported!');
}
