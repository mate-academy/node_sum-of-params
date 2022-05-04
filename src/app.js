require('dotenv').config();

const args = process.argv.slice(2);
const sum = args.slice(1).reduce((pv, cv) => +pv + +cv, 0);
const mult = args.slice(1).reduce((pv, cv) => +pv * +cv, -1);

switch (args[0]) {
  case 'add':
    // eslint-disable-next-line no-console
    console.log(sum || 'There is nothing to add');
    break;

  case 'multiply':
    // eslint-disable-next-line no-console
    console.log(mult !== -1 ? Math.abs(mult) : 'There is nothing to multiply');
    break;

  default:
    // eslint-disable-next-line no-console
    console.log('Operation is not supported!');

    break;
}
