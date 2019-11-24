// let name = "";
// let name = "Nik";
let name = "Nikolay";
console.log(`Hello, ${name}`);
if (name.length > 5) {
    console.log("This name have more 5 character");
} else if (name.length <= 5 && name.length > 0) {
    console.log("You name have 5 or less character");
} else {
    console.log("You name soo short");
}

let count = 0;
// while (count < 10) {
//     console.log(`Count: ${count++}`);
// }

for (let i = 0; i < 10; i++) {
    console.log(`Count: ${i}`)
}

let arr = ["first", "two", "three", "four"];
for (let i = 0; i < arr.length; i++) {
    console.log(`Item in array "${arr[i]}", have index ${i}`);
}