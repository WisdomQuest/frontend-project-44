import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (num) => {
  let correctAnswer = 'yes';
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      correctAnswer = 'no';
    }
  }
  if (num < 2) {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const actionGame = () => {
  const questionNum = randomNumber(0, 100);
  const correctAnswer = prime(questionNum);
  return [questionNum, correctAnswer];
};

const primeGame = () => roundGame(actionGame, descriptionGame);

export default primeGame;
