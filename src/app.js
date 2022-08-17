'use strict';

const dotenv = require('dotenv');

dotenv.config();

const consoleAction = process.argv[2];
const consoleValue = process.argv.slice(3);
let result;

switch (consoleAction) {
  case 'add':
    result = consoleValue.reduce((previousValue, currentValue) => {
      if (!isNaN(+currentValue)) {
        return +previousValue + +currentValue;
      }

      return +previousValue;
    }, 0);
    break;
  case 'multiply':
    result = consoleValue.reduce((previousValue, currentValue) => {
      if (!isNaN(+currentValue)) {
        return +previousValue * +currentValue;
      }

      return +previousValue;
    }, 1);
    break;
  default:
    result = 'Operation is not supported!';
}

if (result !== 'Operation is not supported!' && consoleValue.length === 0) {
  result = `There is nothing to ${consoleAction}`;
}

/* eslint-disable no-console */
console.log(result);
