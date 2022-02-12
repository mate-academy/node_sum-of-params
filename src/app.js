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
        return Number(acc) + Number(el);
      case 'multiply':
        return Number(acc) * Number(el);
      default:
        return null;
    }
  }
});

// eslint-disable-next-line
console.log(getValue >= 0 ? getValue : `There is nothing to ${action}`);
