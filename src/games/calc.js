import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'What is the result of the expression?';

const actionGame = () => {
  const sign = ['+', '-', '*'];
  const randomSign = sign[randomNumber(0, sign.length)];
  const num1 = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  let correctAnswer = '';
  const questionMath = `${num1} ${randomSign} ${num2}`;
  switch (randomSign) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
  }
  return [questionMath, String(correctAnswer)];
};

const calcGame = () => roundGame(actionGame, descriptionGame);

export default calcGame;
