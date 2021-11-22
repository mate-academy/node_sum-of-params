'use strict';

import dotenv from 'dotenv';
import minimist from 'minimist';

(async () => {
  const add = await import('./add.js');
  const multiply = await import ('./multiply.js');

  dotenv.config();

  const operation = Object.values(minimist(process.argv.slice(2, 3))).flat()[0];
  const params = Object.values(minimist(process.argv.slice(3))).flat();
  let result;

  switch(operation) {
    case 'add':
      result = add.default.add(params);
      break;

    case 'multiply':
      result = multiply.default.multiply(params);
      break;

    default:
      result = 'Operation is not supported!';
      break;
  }

  console.log(result);
})();

