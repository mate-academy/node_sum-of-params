'use strict';

const operation = process.argv[2];
const numbers = process.argv.slice(3);

numbers.length <= 1
  ? global.console.log(`There is nothing to ${operation}`)
  : operation === 'add'
    ? global.console.log(numbers.reduce((a, b) => +a + +b))
    : operation === 'multiply'
      ? global.console.log(numbers.reduce((a, b) => +a * +b))
      : global.console.log(`${operation} is not supported`);
