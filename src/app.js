/* eslint-disable no-console */
const params = process.argv.slice(2);

const HandleParams = (paramsObj) => {
  const operation = paramsObj[0];
  const availableOperations = ['multiply', 'add'];


  if (!availableOperations.includes(operation)) {
    console.log('Operation is not supported!');

    return '';
  }

  const numbers = paramsObj.slice(1).filter(num => {
    if (!isNaN(num)) {
      return num;
    }
  });

  if (!numbers.length) {
    console.log('There is nothing to ' + operation);

    return '';
  }

  if (operation === 'add') {
    const sum = numbers.reduce((a, b) => Number(a) + Number(b));

    console.log(sum);
  }

  if (operation === 'multiply') {
    const multiply = numbers.reduce((a, b) => Number(a) * Number(b), 1);

    console.log(multiply);
  }
};

HandleParams(params);
