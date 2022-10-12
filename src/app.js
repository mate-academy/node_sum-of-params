/* eslint-disable no-console */
'use strict';

function sumOfParams() {
  const operation = process.argv[2];
  const values = process.argv.slice(3);

  let result = 1;

  const filtredValues = values
    .map(element => Number(element))
    .filter(element => !isNaN(element));

  if (filtredValues.length === 0) {
    return `There is nothing to ${operation}`;
  }

  switch (operation) {
    case 'add':
      filtredValues.forEach(num => {
        result += +num;
      });
      result--;
      break;

    case 'multiply':
      filtredValues.forEach(num => {
        result *= +num;
      });

      break;

    default: return 'Operation is not supported!';
  }

  return result;
}

console.log(sumOfParams());
