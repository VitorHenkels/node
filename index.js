import PromptSync from 'prompt-sync';
import chalk from 'chalk' ;
const prompt=PromptSync();

let nome = prompt("informe seu nome \n");

console.log(`Seja bem vindo ${nome}`);
console.log(chalk.green(nome));

