'use strict';

if (process.argv[2] !== 'add' && process.argv[2] !== 'multiply') {
  return 'Operation is not supported!';
}

const result = process.argv.slice(3).map((x) => +x);

for (let i = 0; i < result.length; i++) {
  if (isNaN(result[i])) {
    return `There is nothing to ${process.argv[2]}`;
  }
}

switch (process.argv[2]) {
  case 'add':
    return result.reduce((a, b) => a + b);
  case 'multiply':
    return result.reduce((a, b) => a * b);
  default:
    break;
}
