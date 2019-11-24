let myList = ["first", "2", 3];
// console.log(myList);
myList = [];
myList[5] = "four";
// console.log(myList);
myList[0] = "1";
myList[1] = 2;
myList[2] = null;
myList[3] = false;
myList[4] = undefined;
myList[6] = [1, 2];
myList[8] = 'last';
// console.log(myList);

testList = [];
testList.push(1, 2); // .append()
console.log(testList);
testList.unshift(33); // .insert(0, value)
console.log(testList);
console.log(testList.pop()); // .pop()
console.log(testList);
console.log(testList.shift()); // .pop(0)
secondTestList = [55, 66];
concateList = testList.concat(secondTestList); // .extend() but need create new list, can concatenate multiply list
console.log(testList);
console.log(concateList);