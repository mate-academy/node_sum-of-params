'use strict';

if (process.argv[3] === undefined) {
  return 'There is nothing to add';
}

const numbers = process.argv.slice(3);

if (process.argv[2] === 'add') {
  return numbers.reduce((a, b) => +a + +b);
} else if (process.argv[2] === 'multiply') {
  return numbers.reduce((a, b) => +a * +b);
} else {
  return 'Operation is not supported!';
}
