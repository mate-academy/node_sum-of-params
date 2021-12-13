'use strict';

const start = () => {
  const data = process.argv.slice(2);

  const check = data.slice(1).every(item => !isNaN(+item));

  if (check) {
    if (data[0] === 'add') {
      const res = data.splice(1).reduce((a, b) => (+a + +b));

      // eslint-disable-next-line no-console
      console.log(res);
    } else if (data[0] === 'multiply') {
      const res = data.splice(1).reduce((a, b) => (+a * +b));

      // eslint-disable-next-line no-console
      console.log(res);
    } else {
      // eslint-disable-next-line no-console
      console.log('Operation is not supported!');
    }
  } else {
    if (data[0] === 'add') {
      // eslint-disable-next-line no-console
      console.log('There is nothing to add');
    } else {
      // eslint-disable-next-line no-console
      console.log('There is nothing to multiply');
    }
  }
};

start();
