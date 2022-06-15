'use strict';

const [operation, ...rest] = process.argv.splice(2);
const numbers = rest.filter(item => !isNaN(item));
let result;

if (!numbers.length) {
  process.stdout.write(`There is nothing to ${operation}`);

  return;
}

switch (operation) {
  case 'add':
    result = numbers.reduce((a, b) => +a + +b, 0);
    process.stdout.write(`${result}`);
    break;

  case 'multiply':
    result = numbers.reduce((a, b) => a * b, 1);
    process.stdout.write(`${result}`);
    break;

  default:
    process.stdout.write('Operation is not supported!');
    break;
}
