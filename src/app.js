/* eslint-disable no-console */
'use strict';

function actionParams() {
  const f = process.argv[2];

  const arg = process.argv.slice(3);

  if (arg.length === 0) {
    return 'There is nothing to add';
  }

  switch (f) {
    case 'add':
      return arg.reduce((sum, item) => (!isNaN(+item) ? sum + +item : sum), 0);
    case 'multiply':
      return arg.reduce((mul, item) => (!isNaN(+item) ? mul * +item : mul), 1);
    default:
      return 'Operation is not supported!';
  }
}

console.log(actionParams());
