'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('No Number Mbud');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!!';
    displayMessage('🎉 Correct Number!!!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '💹 Too high!!' : '💹Too low';
      displayMessage(
        guess > secretNumber ? '💹Too High Dude!!' : '💹Too Low Dude!!'
      );
      score--;
      //
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '💥 You LOST SUCKAA!!';
      displayMessage('You LOST SUCKAAA!!!');
      document.querySelector('.score').textContent = 0;
    }
    // when guess is to high

    // when guess is to low
  }
  // else if (guess < secretNumber) {
  // if (score > 1) {
  // // document.querySelector('.message').textContent = '💹 Too low!!';
  // score--;
  // // document.querySelector('.score').textContent = score;
  // } else {
  // // document.querySelector('.message').textContent = '💥 You LOST SUCKAA!!';
  // // document.querySelector('.score').textContent = score - 1;
  // }
  // }
});

// CODING CHALLENGE 1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again class and attach a click event handler.
2. In the handler function,restore initial values of the score and number variables
3. Restore initial conditions of the message,number,score and guess input field
4. Also restore the original background color(#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing Cuk...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  document.querySelector('.highscore').textContent = highscore;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
