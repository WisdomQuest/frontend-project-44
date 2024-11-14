import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const actionGame = () => {
  let num1 = randomNumber();
  let num2 = randomNumber();
  const questionExample = `${num1} ${num2}`;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const correctAnswer = num1 + num2;
  return [questionExample, String(correctAnswer)];
};

const gcdGame = (user) => {
  roundGame(actionGame, user, descriptionGame);
};

export default gcdGame;
