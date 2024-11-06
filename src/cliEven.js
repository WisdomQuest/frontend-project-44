import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const outAnswer = (answer, questionNum) => {
  const isEvenNum = questionNum % 2 === 0;
  let win = 4;
  if (answer === 'yes') {
    if (isEvenNum) {
      console.log('Correct!');
      win = 1;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
    }
  }
  if (answer === 'no') {
    if (isEvenNum === false) {
      console.log('Correct!');
      win = 1;
    } else {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
    }
  }
  return win;
};

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const qestionEven = () => {
  let win = 0;
  while (win < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    const question = `Question: ${randomNumber}`;
    console.log(question);
    const yourAnswer = readlineSync.question('Your answer: ');
    const countWin = outAnswer(yourAnswer, randomNumber);
    win += countWin;
  }
  if (win === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const evenGame = () => {
  console.log(descriptionGame);
  qestionEven();
};

export default evenGame;
