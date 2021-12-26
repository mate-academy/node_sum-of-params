'use strict';

const dotenv = require('dotenv');

dotenv.config();

const methodName = process.argv[2];
const numbers = process.argv.slice(3).filter(param => Number.isInteger(+param));

const methods = {
  nothing(name) {
    return `There is nothing to ${name}`;
  },
  add(name, params) {
    if (params.length === 0) {
      return `There is nothing to ${name}`;
    }

    return params.reduce((acc, param) => acc + Number(param), 0);
  },
  multiply(name, params) {
    if (params.length === 0) {
      return `There is nothing to ${name}`;
    }

    return params.reduce((acc, param) => acc * param, 1);
  },
  default: () => 'Operation is not supported!',
};

return (methods[methodName] || methods.default)(methodName, numbers);
