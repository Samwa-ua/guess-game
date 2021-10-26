'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};
const changeColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};
const chancgeScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('Gratz! 🎉🎉🎉');
    displayNumber(secretNumber);
    changeColor('green');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Try smaller number' : 'Try bigger number'
      );
      score--;
      chancgeScore(score);
    } else {
      displayMessage('You lost the game 💥');
      chancgeScore(0);
      displayNumber(secretNumber);
      changeColor('maroon');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  chancgeScore(score);
  displayMessage('Start guessing...');
  changeColor('#222');
  displayNumber('?');
  document.querySelector('.guess').value = '';
});
