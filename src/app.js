'use strict';

const terminalHandler = (input) => {
  const [operation, ...array] = input.slice(2);
  let result = 0;

  let newArray = [];

  if (array.length > 0) {
    newArray = array.filter(el => !Number.isNaN(Number(el)));
  } else {
    return `There is nothing to ${operation}`;
  }

  switch (operation) {
    case ('add'):
      for (const el of newArray) {
        result += Number(el);
      }

      return `${result} - the sum of all numbers`;
    case ('multiply'):
      result = 1;

      for (const el of newArray) {
        result *= Number(el);
      }

      return `${result} - the product of ${newArray.join(' * ')}`;
    default:
      return 'Operation is not supported!';
  }
};

const streamInput = process.argv;

// eslint-disable-next-line no-console
console.log(`${terminalHandler(streamInput)}`);
