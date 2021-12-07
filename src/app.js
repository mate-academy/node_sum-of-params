'use strict';

sumOfParams();

function sumOfParams() {
  const dataFromTerminal = process.argv.slice(3);
  const action = process.argv[2];

  switch (action) {
    case 'add':
      if (!dataFromTerminal.length) {
        // eslint-disable-next-line no-console
        console.log('There is nothing to add');
        break;
      }

      const result = dataFromTerminal.map(num => +num).reduce((a, b) => a + b);

      // eslint-disable-next-line no-console
      console.log(result);
      break;

    case 'mutiply':
      if (!dataFromTerminal.length) {
        // eslint-disable-next-line no-console
        console.log('There is nothing to mutiply');
        break;
      }

      const res = dataFromTerminal.map(num => +num).reduce((a, b) => a * b);

      // eslint-disable-next-line no-console
      console.log(res);
      break;

    default:

      // eslint-disable-next-line no-console
      console.log('Operation is not supported!');
      break;
  };
}
