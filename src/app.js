'use strict';

const parameters = process.argv.slice(2);

// eslint-disable-next-line no-console
console.log(calculate(parameters));

function calculate(params) {
  let result = 0;

  switch (params[0]) {
    case 'add':
      if (params.length < 2) {
        return `There is nothing to add`;
      }

      for (const element of params) {
        if (element === 'add') {
          continue;
        }

        result += Number(element);
      }

      return result;

    case 'multiply':
      result = 1;

      if (params.length < 2) {
        return `There is nothing to multiply`;
      }

      for (const element of params) {
        if (element === 'multiply') {
          continue;
        }
        result *= Number(element);
      }

      return result;

    default:
      return 'Operation is not supported!';
  }
}
