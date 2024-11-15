import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const actionGame = () => {
  const questionNum = randomNumber();
  let correctAnswer = 'yes';
  for (let i = 2; i < Math.sqrt(questionNum); i += 1) {
    if (questionNum % i === 0) {
      correctAnswer = 'no';
    }
  }
  if (questionNum === 0) {
    correctAnswer = 'no';
  }
  return [questionNum, correctAnswer];
};

const primeGame = () => {
  roundGame(actionGame, descriptionGame);
};

export default primeGame;
