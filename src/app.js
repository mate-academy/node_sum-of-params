'use strict';

const action = process.argv[2];
const workData = process.argv.slice(3);

if (!['add', 'multiply'].includes(action)) {

  // eslint-disable-next-line
  console.log(`Operation is not supported!`);
  process.exit();
}

const getValue = workData.reduce((acc, el) => {
  if (!isNaN(Number(el))) {
    switch (action) {
      case 'add':
        return acc + Number(el);
      case 'multiply':
        return acc * Number(el);
      default:
        return null;
    }
  }
}, 0);

// eslint-disable-next-line
console.log(getValue || `There is nothing to ${action}`);
