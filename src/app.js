/* eslint-disable no-console */
'use strict';

const args = process.argv.slice(2);

const operation = args[0];

const numbers = args.slice(1).filter(arg => !isNaN(arg)).map(Number);

if (numbers.length === 0) {
  if (operation === 'add') {
    console.log('There is nothing to add.');
  } else if (operation === 'multiply') {
    console.log('There is nothing to multiply.');
  } else {
    console.log('Operation is not supported!');
  }
} else {
  let result;

  if (operation === 'add') {
    result = numbers.reduce((acc, num) => acc + num, 0);
  } else if (operation === 'multiply') {
    result = numbers.reduce((product, num) => product * num, 1);
  } else {
    console.log('Operation is not supported!');
    process.exit(1);
  }

  console.log(result);
}
