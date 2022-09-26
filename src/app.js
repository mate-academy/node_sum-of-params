/* eslint-disable no-console */
'use strict';

const arrOfParams = process.argv.slice(2);
const operation = arrOfParams[0];
const args = arrOfParams
  .slice(1)
  .map((el) => +el)
  .filter((el) => isNaN(el) === false);

switch (operation) {
  case 'add': {
    if (args.length === 0) {
      console.log('There is nothing to add');
    } else {
      console.log(args.reduce((sum, el) => sum + el, 0));
    }

    break;
  }

  case 'multiply': {
    if (args.length === 0) {
      console.log('There is nothing to multiply');
    } else {
      console.log(args.reduce((sum, el) => sum * el, 1));
    }

    break;
  }
  default:
    console.log('Operation is not supported!');
    break;
}
