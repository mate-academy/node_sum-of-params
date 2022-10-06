  'use strict';
import readline from 'readline';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.question('What is operation: ', (operation) => {
  const arrNumbers = operation.replace(/[^0-9]/g,"").split('');

  if (operation.includes('add')) {
    const resultOperation = arrNumbers.reduce((a, b) => +a + +b);
    console.log(`result: ${resultOperation}`);
  } else if (operation.includes('multiply')) {
    const resultOperation = arrNumbers.reduce((a, b) => +a * +b);
    console.log(`result: ${resultOperation}`);
  } else {
    console.log('Operation is not supported!')
  }
  terminal.close();
})
