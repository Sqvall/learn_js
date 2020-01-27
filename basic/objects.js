const anna = {
  name: 'Анна',
  age: 22,
  luckyNumbers: [2, 5, 6, 77]
};
const dave = {
  name: 'Дэйв',
  age: 25,
  luckyNumbers: [13, 12, 11]
};
const kate = {
  name: 'Кэйт',
  age: 28,
  luckyNumbers: [55, 33, 44]
};
const friendsList = [];
friendsList.push(anna, dave, kate);
console.log(friendsList);
console.log(friendsList[0]);
console.log(friendsList[1].luckyNumbers[0]);

const newFriendList = {
  Вероника: {
    age: 31,
    status: 'Friend'
  },
  Вадим: {
    age: 29,
    status: 'Friend'
  }
};
console.log();
console.log(Object.keys(newFriendList));
console.log(newFriendList['Вероника']);
