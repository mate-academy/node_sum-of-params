/* eslint-disable no-console */
'use strict';

const enteredData = process.argv.slice(2);

function operations(operation, value) {
  let result = 0;
  let error = '';

  switch (operation) {
    case 'add':
      result = value.reduce((acc, val) => {
        if (!parseInt(val)) {
          error = 'There is nothing to add';
        }

        return acc + parseInt(val);
      }, 0);
      break;
    case 'multiply':
      result = value.reduce((acc, val) => {
        if (!parseInt(val)) {
          error = 'There is nothing to multiply';
        }

        return acc * parseInt(val);
      }, 1);
  }
  console.log(result || error);
}

switch (enteredData[0]) {
  case 'add':
    operations(enteredData[0], enteredData.slice(1));
    break;
  case 'multiply':
    operations(enteredData[0], enteredData.slice(1));
    break;
  default:
    console.log('Operation is not supported!');
}
