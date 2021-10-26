'use strict';

// document.querySelector('.number').textContent = 21;
// document.querySelector('.message').textContent = 'Lucky number!';
// document.querySelector('.guess').value = 5;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Gratz! 🎉🎉🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Try bigger number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game 💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'maroon';
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Try smaller number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game 💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'maroon';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //   console.log('test');
});
