const prompt = require('prompt-sync')();
let aluno = prompt("Qual é o seu nome?: ");
console.log("Seu nom é: " + aluno);
let serie = Number(prompt("Em que série você está?: "));
let resultado = (serie === 2);
console.log(resultado);