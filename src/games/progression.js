import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'What number is missing in the progression?';

const generateProgression = (firstNumber, step, length) => {
  let startNum = firstNumber;
  const progression = [startNum];
  for (let i = 0; i < length; i += 1) {
    startNum += step;
    progression.push(startNum);
  }
  return progression;
};

const actionGame = () => {
  const firstNumber = randomNumber(0, 100);
  const step = randomNumber(0, 5) + 1;
  const length = randomNumber(10, 20);
  const hiddenNum = randomNumber(10, length);
  const progression = generateProgression(firstNumber, step, length);
  const correctAnswer = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const progressionGame = () => roundGame(actionGame, descriptionGame);

export default progressionGame;
