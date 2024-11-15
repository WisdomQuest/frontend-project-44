import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'What number is missing in the progression?';

const actionGame = () => {
  let randomNum = randomNumber();
  const arithmeticProgression = randomNumber(5) + 1;
  const progression = [randomNum];
  for (let i = 0; i < 10; i += 1) {
    randomNum += arithmeticProgression;
    progression.push(randomNum);
  }
  const hiddenNum = randomNumber(10);
  const correctAnswer = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const progressionGame = () => {
  roundGame(actionGame, descriptionGame);
};
export default progressionGame;
