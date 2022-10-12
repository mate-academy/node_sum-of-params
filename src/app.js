'use strict';

function calculate() {
  const argv = process.argv.slice(2);

  const operation = argv[0];
  const nums = argv
    .slice(1)
    .filter(arg => isFinite(arg))
    .map(Number);

  if (operation !== 'add' && operation !== 'multiply') {
    return ('Operation is not supported!');
  }

  if (nums.length === 0) {
    return `There is nothing to ${operation}`;
  }

  switch (operation) {
    case 'add':
      return nums.reduce((accum, num) => accum + num, 0);

    case 'multiply':
      return nums.reduce((accum, num) => accum * num, 1);
  }
}

// eslint-disable-next-line no-console
console.log(calculate());
