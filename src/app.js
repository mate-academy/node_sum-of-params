/* eslint-disable no-console */
'use strict';

function multiply(args) {
  let sum = 1;

  for (const n of args) {
    sum *= n;
  }

  return sum;
}

function add(args) {
  let sum = 0;

  for (const n of args) {
    sum += n;
  }

  return sum;
}

const inputElements = process.argv.slice(2);
const allowedOperations = ['add', 'multiply'];

let opperation = '';
const numbers = [];

inputElements.forEach((element) => {
  if (+element) {
    numbers.push(+element);
  } else if (allowedOperations.includes(element)) {
    opperation = element;
  }
});

if (numbers.length === 0) {
  console.log(`There is nothing to ${opperation}`);
} else if (opperation === 'add') {
  console.log(add(numbers));
} else if (opperation === 'multiply') {
  console.log(multiply(numbers));
} else {
  console.log('Operation is not supported!');
}
