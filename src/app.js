'use strict';

const actions = {
  add: (a, b) => Number(a) + Number(b),
  multiply: (a, b) => Number(a) * Number(b),
};

const action = process.argv[2];
const numbers = process.argv
  .slice(3)
  .filter(item => !isNaN(Number(item)));
let result = '';

if (!numbers.length) {
  result = `There is nothing to ${action || 'calculate'}`;
} else if (action !== 'add' && action !== 'multiply') {
  result = 'Operation is not supported!';
} else {
  result = numbers.reduce(actions[action]);
}

console.log(result);
