'use strict';

const args = process.argv.slice(2);
const [option, ...numbers] = args;

const handleReadLine = () => {
  const onlyNumbers = numbers.filter((number) => !isNaN(number));

  if (onlyNumbers.length) {
    return 'There is nothing to add';
  };

  switch (option) {
    case 'add':
      return onlyNumbers.reduce((acc, item) => {
        return acc + +item;
      }, 0);

    case 'multiply':
      return onlyNumbers.reduce((acc, item) => {
        return acc * item;
      }, 1);

    default:
      return 'Operation is not supported!';
  }
};

// eslint-disable-next-line no-console
console.log(handleReadLine());
