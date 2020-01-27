// let name = "";
// let name = "Nik";
let name = "Nikolay";
console.log(`Hello, ${name}`);
// Conditions if/else
if (name.length > 5) {
  console.log("This name have more 5 character");
} else if (name.length <= 5 && name.length > 0) {
  console.log("You name have 5 or less character");
} else {
  console.log("You name soo short");
}

console.log();

// while
let count = 0;
while (count < 10) {
  console.log(`Count: ${count++}`);
}

console.log();

// for (default)
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`)
}

console.log();

// for (default array)
let arr = ["first", "two", "three", "four"];
for (let i = 0; i < arr.length; i++) {
  console.log(`Item in array "${arr[i]}", have index ${i}`);
}

console.log();

// forEach
arr.forEach((item) => {
  console.log(`forEach item: ${item}`)
});

console.log();

// for/of loop through the values of iterable objects (array)
for (let i of arr) {
  console.log(`for i of arr: ${i}`)
}

console.log();

// for/of loop through the values of iterable objects (string)
let string = 'test string';
for (let i of string) {
  console.log(`for i of string: ${i}`)
}

console.log();
// for/in loop through the properties of an objects (array)
// Careful, need condition hasOwnProperty when current work it
for (let i in arr) {
  if (arr.hasOwnProperty(i)) {
    console.log(`for i index ${i} in arr: ${arr[i]}`)
  }
}