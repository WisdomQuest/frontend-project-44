import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const actionGame = () => {
  const questNumber = randomNumber();
  const isEvenNum = questNumber % 2 === 0;
  const correctAnswer = isEvenNum ? 'yes' : 'no';

  return [questNumber, correctAnswer];
};

const evenGame = () => {
  console.log(descriptionGame);
  roundGame(actionGame);
};

export default evenGame;
