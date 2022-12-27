'use strict';

const operation = process.argv[2];

if (operation !== 'add' && operation !== 'multiply') {
  // eslint-disable-next-line no-console
  console.log('Operation is not supported!');

  return;
}

const params = process.argv.slice(3);
const numericParams = params.filter((a) => (
  typeof parseInt(a) === 'number' && !isNaN(parseInt(a))
));

if (!numericParams.length) {
  // eslint-disable-next-line no-console
  console.log(`There is nothing to ${operation}`);

  return;
}

if (operation === 'add') {
  // eslint-disable-next-line no-console
  console.log(numericParams.reduce((a, b) => parseInt(a) + parseInt(b)));
} else if (operation === 'multiply') {
  // eslint-disable-next-line no-console
  console.log(numericParams.reduce((a, b) => parseInt(a) * parseInt(b)));
}
