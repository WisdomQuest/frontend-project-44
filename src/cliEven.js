import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const outAnswer = (answer, questionNum) => {
  const isEvenNum = questionNum % 2 === 0;
  let win = Infinity;

  if ((answer === 'yes' && isEvenNum) || (answer === 'no' && isEvenNum === false)) {
    console.log('Correct!');
    win = 1;
  } else {
    const correctAnswer = isEvenNum ? 'yes' : 'no';
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`,
      `Let's try again, ${userName}!`,
    );
  }

  return win;
};

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const qestionEven = () => {
  let winCount = 0;
  while (winCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    winCount += outAnswer(yourAnswer, randomNumber);
  }
  if (winCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const evenGame = () => {
  console.log(descriptionGame);
  qestionEven();
};

export default evenGame;
