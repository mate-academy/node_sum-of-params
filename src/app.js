'use strict';

const [action, ...items] = process.argv.slice(2);

let result = '';

function sorted(number, operation) {
  let buff = operation === 'multiply' ? 1 : 0;

  const numbers = number.filter(elem => !isNaN(+elem));

  if (numbers.length !== 0) {
    numbers.forEach(elem => {
      switch (operation) {
        case 'add':
          buff += +elem;

          return;
        case 'multiply':
          buff = buff * +elem;

          return;
        default:
          buff = 'Operation is not supported!';
      }
    });
  } else {
    buff = `There is nothing to ${action}`;
  }

  return buff;
}

result = sorted(items, action);

// eslint-disable-next-line no-console
console.log(result);
