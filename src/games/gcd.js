import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const actionGame = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const questionExample = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return [questionExample, String(correctAnswer)];
};

const gcdGame = () => roundGame(actionGame, descriptionGame);

export default gcdGame;
