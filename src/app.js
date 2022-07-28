/* eslint-disable no-console */
'use strict';

const actionWithArgs = () => {
  const action = process.argv[2];
  const writenArgs = process.argv.slice(2);

  if (action !== 'add' && action !== 'multiply') {
    return 'Operation is not supported!';
  }

  const filteredArgs = writenArgs.slice(1).filter(el => !isNaN(+el));

  return filteredArgs.length
    ? filteredArgs.reduce((acc, el) => (
      action === 'add' ? acc + +el : acc * +el
    ), action === 'add' ? 0 : 1)
    : `There is nothing to ${action}`;
};

(function() {
  console.log(actionWithArgs());
})();
