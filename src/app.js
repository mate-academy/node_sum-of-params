'use strict';

const [operation] = process.argv.slice(2, 3);
const [...numbers] = process.argv.slice(3).filter(Number);

// eslint-disable-next-line no-console
console.log(res(operation, ...numbers));

function res(act, ...num) {
  if (!num.length) {
    return `There is nothing to ${act}`;
  }

  switch (act) {
    case 'add':
      return num.reduce((acc, el) => acc + +el, 0);

    case 'multiply':
      return num.reduce((acc, el) => acc * el, 1);

    default:
      return 'Operation is not supported!';
  }
};
