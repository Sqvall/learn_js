const range = (start, end, step) => {
  const result = [];
  if (start === end) return [start];
  step = step !== undefined ? step : 1;
  if (start <= end) {
    for (let i = start; i <= end; i = i + step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i + step) {
      result.push(i);
    }
  }
  return result;
};

const sum = (arr) => {
  let result = 0;
  for (const i of arr) {
    result = result + Number(i);
  }
  return result;
};

console.log(range(1, 10, 2));
console.log(range(10, 2, -2));
console.log(range(1, 10).reduce((i, j) => i + j));
console.log(sum(range(1, 10)));
