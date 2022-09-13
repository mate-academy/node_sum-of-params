'use strict';

const terminalFunction = (mass) => {
  const [operation, ...array] = mass.slice(2);
  let result;

  switch (operation) {
    case ('add'):
      result = array.reduce((prev, current) => {
        return +prev + +current;
      });
      break;
    case ('multiply'):
      result = array.reduce((prev, current) => {
        return +prev * +current;
      });
      break;
    default:
      return 'Operation is not supported!';
  }

  return result;
};

terminalFunction(process.argv);
