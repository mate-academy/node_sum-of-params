'use strict';

const [, , action, ...items] = process.argv;

let result = '';

function sorted(number, operation) {
  let buff = operation === 'multiply' ? 1 : 0;

  number.map(elem => {
    if (isNaN(+elem)) {
      return;
    }

    switch (operation) {
      case 'add':
        buff += +elem;
        break;
      case 'multiply':
        buff = buff * +elem;
        break;
      default:
        buff = 'Operation is not supported!';
    }
  });

  if (number.length === 0) {
    buff = `There is nothing to ${action}`;
  }

  return buff;
}

result = sorted(items, action);

// eslint-disable-next-line no-console
console.log(result);
