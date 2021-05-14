'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const number = function (number) {
    document.querySelector('.number').textContent = number;
};
const numberStyle = function (width) {
    document.querySelector('.number').style.width = width;
}
const bodyColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}


console.log(`Secret number: ${secretNumber}`);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When no input
    if (!guess) {
        displayMessage('⛔ No number!');

        //When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        number(secretNumber);

        bodyColor('#60b347');
        numberStyle('30rem');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            displayScore(0);

            bodyColor('#af0303');
        }
    }
});

//New game
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`New secret number: ${secretNumber}`);

    displayMessage('Start guessing...');
    displayScore(score);
    number('?');
    document.querySelector('.guess').value = '';

    numberStyle('15rem');
    bodyColor('#222');
});