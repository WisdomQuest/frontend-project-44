import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

const getUserName = () => {
  console.log(`Hello , ${userName} !`);
};

export { getUserName, userName };
