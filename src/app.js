// eslint-disable-next-line strict
'use strict';

import readline from 'readline';

const args = process.argv.slice(2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const finishWork = (value) => {
  rl.write(value);
  rl.close();
};

switch (args[0]) {
  case 'add':
    const resultAdd = args.slice(1).reduce((acc, item) => {
      if (isNaN(item)) {
        return +acc;
      }

      return +acc + +item;
    }, 0);

    if (resultAdd === 0) {
      finishWork('There is nothing to add');

      break;
    }

    finishWork(`${resultAdd}`);
    break;

  case 'multiply':
    const resultMultiply = args.slice(1).reduce((acc, item) => {
      if (isNaN(item)) {
        return +acc * 1;
      }

      return +acc * +item;
    });

    if (resultMultiply === 0) {
      finishWork('There is nothing to multiply');

      break;
    }

    finishWork(`${resultMultiply}`);
    break;

  default:
    finishWork('Operation is not supported!');
}
