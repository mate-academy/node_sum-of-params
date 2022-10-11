import readline from 'readline';

const args = process.argv.slice(2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

switch (args[0]) {
  case 'add':
    const resAdd = args.slice(1).reduce((acc, item) => {
      if (isNaN(item)) {
        return +acc;
      }

      return +acc + +item;
    }, 0);

    if (resAdd === 0) {
      rl.write('There is nothing to add');
      rl.close();

      break;
    }

    rl.write(`${resAdd}`);
    rl.close();
    break;

  case 'multiply':
    const resMultiply = args.slice(1).reduce((acc, item) => {
      if (isNaN(item)) {
        return +acc * 1;
      }

      return +acc * +item;
    });

    if (resMultiply === 0) {
      rl.write('There is nothing to multiply');
      rl.close();

      break;
    }

    rl.write(`${resMultiply}`);
    rl.close();
    break;
  default:
    rl.write('Operation is not supported!');
    rl.close();
}
