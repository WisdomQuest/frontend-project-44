import roundGame from '../index.js';
import randomNumber from '../utilRandomNumber.js';

const descriptionGame = 'What number is missing in the progression?';

const actionGame = () => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(randomNumber());
  }
  const arithmeticProgression = progression.sort((a, b) => a - b);
  const hiddenNum = randomNumber(10);
  const correctAnswer = arithmeticProgression[hiddenNum];
  arithmeticProgression[hiddenNum] = '..';
  let question = '';
  arithmeticProgression.forEach((element) => {
    question += `${element} `;
  });
  return [question, String(correctAnswer)];
};

const progressionGame = () => {
  console.log(descriptionGame);
  roundGame(actionGame);
};
export default progressionGame;
