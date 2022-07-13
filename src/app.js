'use strict';

const [operation, ...args] = process.argv.slice(2);

const numbers = args.filter(num => +num);

if (numbers.length === 0) {
  console.log(`There is nothing to ${operation}`);
}

function operations() {
  if (operation === 'add') {
    const sum = numbers.reduce(
      (initialValue, currentValue) => +initialValue + +currentValue);

    console.log(sum);
  } else if (operation === 'multiply') {
    const multiply = numbers.reduce(
      (initialValue, currentValue) => +initialValue * +currentValue);

    console.log(multiply);
  } else {
    console.log('Operation is not supported!');
  }
}

operations();
