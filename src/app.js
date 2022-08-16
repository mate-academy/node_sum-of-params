'use strict';

const operation = process.argv.slice(2, 3);
const paramsArray = process.argv.slice(3);
const isEmptyParams = !paramsArray.length;

const printResult = () => {
  switch (operation[0]) {
    case 'add': {
      let sum = 0;

      paramsArray.forEach(num => {
        sum += +num;
      });
      // eslint-disable-next-line no-console
      console.log(sum);
      break;
    }

    case 'multiply': {
      let result = 1;

      paramsArray.forEach(num => {
        result *= +num;
      });
      // eslint-disable-next-line no-console
      console.log(result);
      break;
    }

    default: {
      // eslint-disable-next-line no-console
      console.log('Operation is not supported!');
      break;
    }
  }
};

if (isEmptyParams) {
  // eslint-disable-next-line no-console
  console.log(`There is nothing to ${operation}`);
} else {
  printResult();
}
