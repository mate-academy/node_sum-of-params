/* eslint-disable no-console */
'use strict';

// eslint-disable-next-line no-debugger
debugger;

function add(...args) {
  if ([...args].every(el => Number.isNaN(+el))) {
    return 'There is nothing to add';
  }

  return [...args].reduce((acc, el) => {
    if (Number.isNaN(+el)) {
      return Number(acc);
    }

    return Number(acc) + Number(el);
  }, 0);
}

function multiply(...args) {
  if ([...args].every(el => Number.isNaN(+el))) {
    return 'There is nothing to multiply';
  }

  return [...args].reduce((acc, el) => {
    if (Number.isNaN(+el)) {
      return Number(acc);
    }

    return Number(acc) * Number(el);
  }, 1);
}

const action = process.argv[2];
const data = process.argv.slice(3);

if (action === 'multiply') {
  const total = multiply(...data);

  console.log(total);
} else if (action === 'add') {
  const total = add(...data);

  console.log(total);
} else {
  console.log('Operation is not supported!');
}
