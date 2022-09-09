'use strict';

const terminalFunction = (mass) => {
  const [operation, ...array] = mass.slice(2);
  let result = 0;

  switch (operation) {
    case ('add'):
      for (const item of array) {
        result += +item;
      }
      break;
    case ('multiply'):
      result = 1;

      for (const item of array) {
        result *= +item;
      }
      break;
    default:
      return 'Operation is not supported!';
  }

  return result;
};

terminalFunction(process.argv);
