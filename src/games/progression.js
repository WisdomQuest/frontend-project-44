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
  let question = '';
  progression.forEach((element) => {
    question += `${element} `;
  });
  return [question, String(correctAnswer)];
};

const progressionGame = () => {
  console.log(descriptionGame);
  roundGame(actionGame);
};
export default progressionGame;
