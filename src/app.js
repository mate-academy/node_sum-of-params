/* eslint-disable no-console */
'use strict';

const actionWithArgs = () => {
  const [action, ...params] = process.argv.slice(2);

  if (action !== 'add' && action !== 'multiply') {
    return 'Operation is not supported!';
  }

  const filteredParams = params.filter(el => !isNaN(+el));

  return filteredParams.length
    ? filteredParams.reduce((acc, el) => (
      action === 'add' ? acc + +el : acc * +el
    ), action === 'add' ? 0 : 1)
    : `There is nothing to ${action}`;
};

(function() {
  console.log(actionWithArgs());
})();
