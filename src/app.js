'use strict';

(function() {
  const commandLineNumbers = process.argv
    .slice(1)
    .filter(possibleNum => +possibleNum)
    .map(num => Number(num));
  const action = process.argv[2];

  switch (action) {
    case 'add':

      // eslint-disable-next-line no-console
      console.log(commandLineNumbers.reduce((acc, curVal) => acc + curVal, 0)
      );

      break;

    case 'multiply':
      const result = commandLineNumbers
        .reduce((acc, curVal) => acc * curVal, 1);

      // eslint-disable-next-line no-console
      console.log(result);

      break;

    default:
      // eslint-disable-next-line no-console
      console.log('Operation is not supported!');
      break;
  }
})();
