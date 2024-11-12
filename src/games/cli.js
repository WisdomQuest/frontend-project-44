import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

const welcomeUser = () => {
  console.log(`Hello , ${userName}!`);
};

export { welcomeUser, userName };
