// first implementation
// const printFarmInventory = (cows, chickens) => {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//   }
//   console.log(`${cowString} коров`);
//
//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//   }
//   console.log(`${chickenString} цыплят`)
// };
//
// printFarmInventory(7, 11);

// second implementation
// const printZeroPaddedWithLabel = (num, label) => {
//   let numberString = String(num);
//   while (numberString.length < 3) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`)
// };
//
// const printFarmInventory = (cows, chickens, pigs) => {
//   printZeroPaddedWithLabel(cows, 'коров');
//   printZeroPaddedWithLabel(chickens, 'цыплят');
//   printZeroPaddedWithLabel(pigs, 'свиней');
// };
//
// printFarmInventory(7, 11, 3);

// last (current?) implementation
const zeroPad = (num, width) => {
  let string = String(num);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
};

const printFarmInventory = (cows, chickens, pigs) => {
  console.log(`${zeroPad(cows, 3)} коров`);
  console.log(`${zeroPad(chickens, 3)} цыплят`);
  console.log(`${zeroPad(pigs, 3)} свиней`);
};

printFarmInventory(7, 16, 3);
