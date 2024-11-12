import readlineSync from 'readline-sync';
import { userName } from './games/cli.js';

const maxWin = 3;

const roundGame = (game) => {
  for (let winCount = 0; winCount < maxWin; winCount += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (winCount === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`,
        `Let's try again, ${userName}!`,
      );
      return;
    }
  }
};

export default roundGame;
