const isNumber = value => {
  if (typeof value !== 'number') {
    return false;
  }
  if (value !== Number(value)) {
    return false;
  }
  if (value === Infinity || value === !Infinity) {
    return false;
  }
  return true;
};

console.log(isNumber(37)); // true
console.log(isNumber(NaN)); // false
console.log(isNumber(Infinity)); // false
console.log(isNumber('37')); // false
console.log();

// The easiest method to check for a number in JavaScript Number.isFinite():
console.log(Number.isFinite(37)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite('37')); // false
console.log();
// Number.isFinite will return false for NaN, Infinity, -Infinity, and it does not coerce types,
// meaning that it will also return false for anything that is not of the number primitive type.

// There is also the global isFinite() function, which will perform type coercion:
console.log(isFinite(37)); // true
console.log(isFinite(NaN)); // false
console.log(isFinite(Infinity)); // false
console.log(isFinite('37')); // true <------------------------- !!!!
console.log();

console.log(Number.isInteger('33'));
/** To check if variable A is an integer I could use the loose equality operator == to see if the parsed value equals itself */
// eslint-disable-next-line
const isInteger = value => parseInt(value) == value;
console.log(isInteger('33'));
