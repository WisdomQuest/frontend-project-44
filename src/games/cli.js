import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const welcomeUser = () => {
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello , ${userName}!`);
  return userName;
};

export default welcomeUser;
