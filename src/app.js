/* eslint-disable no-console */
'use strict';

const paramsFunction = process.argv.slice(2, 3)[0];
const paramsValues = process.argv.slice(3).reduce((acc, total) => {
  if (!isNaN(+total)) {
    acc.push(+total);
  }

  return acc;
}, []);

if (paramsFunction === 'add') {
  if (paramsValues.length === 0) {
    console.log(`There is nothing to add`);
  } else {
    add(...paramsValues);
  }
} else if (paramsFunction === 'multiply') {
  if (paramsValues.length === 0) {
    console.log(`There is nothing to add`);
  } else {
    multiply(...paramsValues);
  }
} else {
  console.log(`Operation is not supported!`);
}

function add(...args) {
  let result = 0;

  args.forEach((arg) => {
    result += arg;
  });

  console.log(result);
}

function multiply(...args) {
  let result = 1;

  args.forEach((arg) => {
    result *= arg;
  });

  console.log(result);
}
