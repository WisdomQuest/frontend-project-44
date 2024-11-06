#!/usr/bin/env node
import { getUserName } from '../src/cli.js';

const Hello = () => {
  console.log('Welcome to the Brain Games!');
  getUserName();
};

Hello();

export default Hello;
