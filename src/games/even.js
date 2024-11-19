import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const actionGame = () => {
  const questNumber = randomNumber(0, 100);
  const isEvenNum = questNumber % 2 === 0;
  const correctAnswer = isEvenNum ? 'yes' : 'no';

  return [questNumber, correctAnswer];
};

const evenGame = () => roundGame(actionGame, descriptionGame);

export default evenGame;
