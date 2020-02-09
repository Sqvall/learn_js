const min = (first, second) => {
  if (first < second) {
    return first;
  } else {
    return second;
  }
};

const min2 = (...args) => {
  let result = Infinity;
  for (const i of args) {
    if (i < result) {
      result = i;
    }
  }
  return result;
};

console.log(min(2, 7));
console.log(min2(2, 5, 1, 6, -11));

const isEven = (int) => {
  if (int < 0) int = -int;
  if (int !== 0 && int > 1) {
    return isEven(int - 2);
  } else {
    return int === 0;
  }
};

console.log(isEven(16));

const countsBs = (str) => {
  let result = 0;
  for (const i of str) {
    if (i === 'B') result++;
  }
  return result;
};

const countChar = (str, char) => {
  let result = 0;
  for (const i of str) {
    if (i === char) result++;
  }
  return {
    char: char,
    result: result
  };
};

console.log(countsBs('asdfBlkBBiiir'));
console.log(countChar('asdfGjkGllkf', 'a'));
console.log(countChar('asdfGjkGllkf', 'G'));
console.log(countChar('asdfGjkGllkf', ' '));
