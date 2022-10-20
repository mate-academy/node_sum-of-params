'use strict';

const operation = process.argv[2];
const numbers = process.argv.slice(3).filter(item => Number(item));

!numbers.length
  ? global.console.log(`There is nothing to ${operation}`)
  : operation === 'add'
    ? global.console.log(numbers.reduce((a, b) => a + b, 0))
    : operation === 'multiply'
      ? global.console.log(numbers.reduce((a, b) => 1 * b, 1))
      : global.console.log(`${operation} is not supported`);
