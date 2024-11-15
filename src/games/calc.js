import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'What is the result of the expression?';

const actionGame = () => {
  const sign = ['+', '-', '*'];
  const randomSiqn = sign[randomNumber(3)];
  const num1 = randomNumber();
  const num2 = randomNumber();
  let correctAnswer = '';
  const questionMath = `${num1} ${randomSiqn} ${num2}`;
  switch (randomSiqn) {
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

const calcGame = () => {
  roundGame(actionGame, descriptionGame);
};

export default calcGame;
