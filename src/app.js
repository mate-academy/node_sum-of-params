'use strict';

function operations(operation, value) {
  let result = 0;
  let error = '';

  switch (operation) {
    case 'add':
      result = value.reduce((acc, val) => {
        if (!Number(val)) {
          error = `There is nothing to ${operation}`;

          return;
        }

        return acc + Number(val);
      }, 0);
      break;
    case 'multiply':
      result = value.reduce((acc, val) => {
        if (!Number(val)) {
          error = `There is nothing to ${operation}`;

          return;
        }

        return acc * Number(val);
      }, 1);
  }
  console.log(result || error);
}

function getValue(data) {
  const operation = data[0];

  switch (operation) {
    case 'add':
      operations(operation, data.slice(1));
      break;
    case 'multiply':
      operations(operation, data.slice(1));
      break;
    default:
      console.log('Operation is not supported!');
  }
}

const enteredData = process.argv.slice(2);

getValue(enteredData);
