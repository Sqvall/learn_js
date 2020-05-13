/** For run write in console 'node main.js JavaScript' TODO: Need learn import and module system in JS */
const { reverse } = require('./reverse');
// import reverse from './reverse';

const argument = process.argv[2];

console.log(reverse(argument));
