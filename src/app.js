'use strict';

const operation = process.argv[2];
const params = process.argv.slice(3);
const numericParams = params.filter((a) => (
  typeof parseInt(a) === 'number' && !isNaN(parseInt(a))
));

if (!numericParams.length) {
  // eslint-disable-next-line no-console
  console.log(`There is nothing to ${operation}`);

  return;
}

switch (operation) {
  case 'add':
    // eslint-disable-next-line no-console
    console.log(numericParams.reduce((a, b) => parseInt(a) + parseInt(b)));
    break;
  case 'multiply':
    // eslint-disable-next-line no-console
    console.log(numericParams.reduce((a, b) => parseInt(a) * parseInt(b)));
    break;
  default:
    // eslint-disable-next-line no-console
    console.log('Operation is not supported!');
}
