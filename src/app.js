'use strict';

const operation = process.argv.slice(2, 3)[0];
const inputValues = process.argv.slice(3)
  .map(el => Number(el));

const showResult = () => {
  switch (operation) {
    case 'add':
      return inputValues.reduce((acc, curr) => acc + curr);

    case 'multiply':
      return inputValues.reduce((acc, curr) => acc * curr);

    default:
      return 'Operation is not supported!';
  }
};

if (inputValues.length) {
  showResult();
}
