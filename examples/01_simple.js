const triangle = () => {
  for (let sharp = '#'; sharp.length < 8; sharp += '#') {
    console.log(sharp);
  }
};

triangle();

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();

const chessBoard = (size) => {
  for (let i = 0; i < size; i++) {
    let str = '';
    for (let k = 0; k < size; k++) {
      if (k % 2 === 0) {
        str += i % 2 === 0 ? '#' : ' ';
      } else {
        str += i % 2 === 0 ? ' ' : '#';
      }
    }
    console.log(str);
  }
};

chessBoard(10);
