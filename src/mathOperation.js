/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const add = (numbers) => numbers.reduce((accum, current) => current + accum, 0);
const multiply = (numbers) => numbers.reduce((accum, current) => current * accum);

const mathOperation = (operationType, parametrs) => {
  if (operationType !== 'add' && operationType !== 'multiply') {
    console.log('Operation is not supported!');

    return;
  }

  const numbers = parametrs.filter(element => typeof element === 'number');

  if (numbers.length === 0) {
    console.log(`There is nothing to ${operationType}`);

    return;
  }

  const result = operationType === 'add' ? add(numbers) : multiply(numbers);

  console.log(result);
};

module.exports = { mathOperation };
