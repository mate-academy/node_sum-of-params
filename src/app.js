'use strict';

(() => {
  const params = process.argv.slice(2);

  let result = null;

  switch (params[0]) {
    case 'add':
      for (let i = 1; i < params.length; i++) {
        if (isNaN(Number(params[i]))) {
          continue;
        }
        result += Number(params[i]);
      }
      // eslint-disable-next-line
      console.log(result === null ? 'There is nothing to add' : result);
      break;
    case 'multiply':
      for (let i = 1; i < params.length; i++) {
        if (isNaN(Number(params[i]))) {
          continue;
        }
        result = result ? result * Number(params[i]) : Number(params[i]);
      }
      // eslint-disable-next-line
      console.log(result === null ? 'There is nothing to multiply' : result);
      break;
    default:
      // eslint-disable-next-line
      console.log('Operation is not supported!');
  }
})();
