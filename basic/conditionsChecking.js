import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number ', function (theNumber) {
  const num = Number(theNumber);
  if (!Number.isNaN(num)) {
    console.log(`This number it square root of ${num * num}`);
  } else {
    console.log('You input not number!');
  }
  rl.close();
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});
