/* eslint-disable no-console */
'use strict';

const method = process.argv.slice(2, 3).join(',');

const params = process.argv.slice(3).filter(param => {
  if (param === '0') {
    return '0';
  }

  return Number(param);
});

const add = (args) => {
  if (!params.length) {
    console.log('There is nothing to add');
  } else {
    const total = args.reduce((acc, num) => Number(acc) + Number(num), 0);

    console.log(total);
  }
};

const multiply = (args) => {
  if (!params.length) {
    console.log('There is nothing to multiply');
  } else {
    const total = args.reduce((acc, num) => acc * num, 1);

    console.log(total);
  }
};

switch (method) {
  case 'add':
    add(params);
    break;

  case 'multiply':
    multiply(params);
    break;

  default:
    console.log('Operation is not supported!');
    break;
}
