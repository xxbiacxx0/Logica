const prompt = require('prompt-sync')();

let anos = prompt("Quantos anos você trabalhou ");
let meses = prompt("Quantos meses você trabalhou ");

let tempo = anos*12 + meses;
console.log("Tempo em meses " + tempo);