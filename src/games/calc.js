import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'What is the result of the expression?';

const actionGame = () => {
  const sign = ['+', '-', '*'];
  const randomSiqn = sign[randomNumber(3)];
  const Num1 = randomNumber(11);
  const Num2 = randomNumber(11);
  let correctAnswer = '';
  const questionMath = `${Num1} ${randomSiqn} ${Num2}`;
  switch (randomSiqn) {
    case '+':
      correctAnswer = Num1 + Num2;
      break;
    case '-':
      correctAnswer = Num1 - Num2;
      break;
    case '*':
      correctAnswer = Num1 * Num2;
      break;
    default:
  }
  return [questionMath, String(correctAnswer)];
};

const calcGame = () => {
  console.log(descriptionGame);
  roundGame(actionGame);
};

export default calcGame;