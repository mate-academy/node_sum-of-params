'use strict';

(() => {
  const params = process.argv.slice(2);

  let result = 0;

  if (params[0] === 'add') {
    for (let i = 1; i < params.length; i++) {
      if (isNaN(+params[i])) {
        break;
      }
      result += +params[i];
    }
    // eslint-disable-next-line
    return console.log(result || 'There is nothing to add');
  }

  if (params[0] === 'multiply') {
    for (let i = 1; i < params.length; i++) {
      if (isNaN(+params[i])) {
        break;
      }
      result = result ? result * +params[i] : +params[i];
    }
    // eslint-disable-next-line
    return console.log(result || 'There is nothing to multiply');
  } else {
    // eslint-disable-next-line
    console.log('Operation is not supported!');
  }
})();
