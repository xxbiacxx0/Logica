const prompt = require('prompt-sync')();
let a = Number(prompt("Insira uma nota "));
console.log(a);
let b = Number(prompt("Insira outra nota "));
console.log(b);
let media = (a + b)/2;
let c = (media >= 5);
console.log(c);