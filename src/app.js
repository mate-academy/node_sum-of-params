/* eslint-disable no-console */
'use strict';

const ACTIONS = {
  ADD: 'add',
  MULTIPLY: 'multiply',
};
const params = process.argv.slice(2);
let numbersIsPresent = false;
let temp;

switch (params[0]) {
  case ACTIONS.ADD:
    temp = 0;

    for (let i = 1; i < params.length; i++) {
      if (!isNaN(params[i])) {
        numbersIsPresent = true;
        temp += parseInt(params[i]);
      }
    }

    if (numbersIsPresent) {
      console.log(temp);
    } else {
      console.log('There is nothing to add');
    }
    break;

  case ACTIONS.MULTIPLY:
    temp = 1;

    for (let i = 1; i < params.length; i++) {
      if (!isNaN(params[i])) {
        numbersIsPresent = true;
        temp *= parseInt(params[i]);
      }
    }

    if (numbersIsPresent) {
      console.log(temp);
    } else {
      console.log('There is nothing to add');
    }
    break;

  default:
    console.log('Operation is not supported!');
    break;
}
