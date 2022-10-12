/* eslint-disable no-console */
'use strict';

const argArray = process.argv.slice(2);
const add = (a, x) => {
  return +a + (+x);
};

const multiply = (a, x) => {
  return a * x;
};

function result(arr, todo, actionText) {
  arr.shift();

  const onlyNumber = arr.filter(item => +item);

  if (onlyNumber.length) {
    console.log(onlyNumber.reduce(todo));
  } else {
    console.log(`There is nothing to ${actionText}`);
  }
}

switch (argArray[0]) {
  case 'add':
    result(argArray, add, argArray[0]);
    break;
  case 'multiply':
    result(argArray, multiply, argArray[0]);
    break;

  default:
    console.log('Operation is not supported!');
    break;
}
