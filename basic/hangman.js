// array for random words
let words = [
    "программа",
    "макака",
    "прекрысный",
    "оладушек",
];

// set random word
let word = words[Math.floor(Math.random() * words.length)];

// create final array
let remainingLetter = word.length;
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// game cycle
while (remainingLetter > 0) {
    // Show game status
    alert(answerArray.join(" "));
    // get char
    let guess = prompt("Угадайте букву, или нажмите Отмета, для завершения игры.")
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста введите ОДНУ букву")
    } else {
        // update game status
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetter--;
            }
        }
    }
}

// show answer and congratulations winner
alert(answerArray.join(" "));
alert(`Отлично! было загадано слово ${word}`);