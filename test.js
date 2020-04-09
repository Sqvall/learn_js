const test = ['alsdasdf', 'asdfa', 'asdfas', 'asdf', 'asdfasdf', 'asdfasdf'];
console.log(test.map(i => i));
console.log(test.map(i => [...i]));
console.log([...test]);
