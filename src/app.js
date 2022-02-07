'use strict';

import readline from 'readline';

const calculator = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(params) {
  return params.reduce((sum, value) => sum + +value, 0);
};

function multiply(params) {
  return params.reduce((accumulator, value) => +accumulator * +value, 1);
};

function argumentsFilter(args) {
  return args.filter(arg => typeof +arg === 'number' && !isNaN(+arg));
};

function validateCommand(input) {
  return input === 'add' || input === 'multiply';
}

function executeOperation(operation, vars) {
  if (vars.length <= 1 && validateCommand(operation)) {
    calculator.write(`There is nothing to ${operation} \n`);
    calculator.close();
  } else {
    switch (operation) {
      case 'add':
        calculator.write(add(vars) + '\n');
        calculator.close();
        break;
      case 'multiply':
        calculator.write(multiply(vars) + '\n');
        calculator.close();
        break;
      default:
        calculator.write('Operation is not supported! \n');
        calculator.close();
    };
  }
}

const terminalArguments = process.argv.slice(2);
const command = terminalArguments[0];
const parameters = terminalArguments.slice(1);
const numbers = argumentsFilter(parameters);

executeOperation(command, numbers);
