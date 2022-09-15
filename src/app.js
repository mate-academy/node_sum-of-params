/* eslint-disable no-console */
'use strict';

const args = process.argv.slice(2);
const operation = args[0];
const values = args.slice(1).filter((value) => !isNaN(+value));

switch (operation) {
  case 'add':
    if (values.length === 0) {
      console.log('There is nothing to add');
    } else {
      console.log(values.reduce((sum, num) => sum + Number(num), 0));
    }

    break;
  case 'multiply':
    if (values.length === 0) {
      console.log('There is nothing to multiply');
    } else {
      console.log(values.reduce((sum, num) => sum * Number(num), 1));
    }
    break;

  default:
    console.log('Operation is not supported!');
}
