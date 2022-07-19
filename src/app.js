/* eslint-disable no-console */
'use strict';

const userInput = process.argv.splice(2);
const operation = userInput[0];
const numbers = userInput.splice(1).filter((value) => !isNaN(+value));

if (!numbers.length) {
  return console.log(`There is nothing to ${operation}`);
}

const result = numbers.reduce((a, b) => {
  switch (operation) {
    case 'add':
      return +a + +b;
    case 'multiply':
      return +a * +b;
    default:
      return 'Operation is not supported!';
  }
});

console.log(result);
