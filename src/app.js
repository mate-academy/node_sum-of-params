'use strict';

const minimist = require('../node_modules/minimist');

function calculate(operaition, data) {
  let check = false;

  const calculateResult = data.reduce((res, el) => {
    if (typeof el === 'number') {
      check = true;

      return (operaition === 'sum')
        ? res + el
        : res * el;
    } else {
      return res;
    }
  }, (operaition === 'sum') ? 0 : 1);

  return (check) ? calculateResult : `There is nothing to ${operaition}`;
}

function processData(arr) {
  let result;
  const arrForCalc = arr.slice(3);

  switch (arr[2]) {
    case 'add':
      result = calculate('sum', arrForCalc);
      break;
    case 'multiply':
      result = calculate('multiply', arrForCalc);
      break;
    default:
      return `Operation is not supported!`;
  }

  return result;
}

const commandParams = Object.values(minimist(process.argv))[0];

// eslint-disable-next-line no-console
console.log(
  processData(commandParams)
);
