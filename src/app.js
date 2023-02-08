'use strict';

const numbers = process.argv.slice(3).filter((n) => +n);
const operation = process.argv[2];

if (!numbers.length) {
  global.console.log(`There is nothing to ${operation}`);
} else {
  if (operation === 'add') {
    global.console.log(numbers.reduce((number, total) => +number + +total, 0));
  } else if (operation === 'multiply') {
    global.console.log(numbers.reduce((number, total) => +number * +total, 1));
  } else {
    global.console.log('Operation is not supported!');
  }
}
