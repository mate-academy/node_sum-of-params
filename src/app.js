'use strict';

const operation = process.argv[2];

if (operation !== 'add' && operation !== 'multiply') {
  console.log('Operation is not supported!');

  return;
}

const params = process.argv.slice(3);
const numericParams = params.filter((a) => (
  typeof parseInt(a) === 'number' && !isNaN(parseInt(a))
));

if (!numericParams.length) {
  console.log(`There is nothing to ${operation}`);

  return;
}

if (operation === 'add') {
  console.log(numericParams.reduce((a, b) => parseInt(a) + parseInt(b)));
} else if (operation === 'multiply') {
  console.log(numericParams.reduce((a, b) => parseInt(a) * parseInt(b)));
}
