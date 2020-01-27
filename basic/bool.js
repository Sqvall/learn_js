console.log('&& : ampersand-ampersand');
console.log(true && true);
console.log(true && false);
console.log('|| : pipe-pipe');
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log('!= : not');
console.log(!false);
console.log(true !== false);
// eslint-disable-next-line no-self-compare
console.log(false !== false);
// eslint-disable-next-line no-self-compare
console.log(true !== true);
console.log('combo');
console.log(!false && (false || true) && true);

let age = 11;
let accompanied = true;
console.log(age >= 12 || accompanied);

age = 12;
accompanied = false;
console.log(age >= 12 || accompanied);

age = 11;
accompanied = false;
console.log(age >= 12 || accompanied);
