const prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite um número: "));
let Vdd = (n1%2 == 0);
console.log(Vdd);