const prompt = require('prompt-sync')();
let media = 0.4;
let precokg = 39.90;
let convidados = Number(prompt("Digite a quantidade de pessoas"));
let multiplicacao = media * precokg * convidados;
console.log("A quantidade de carnes por pessoas que você deve comprar é" + multiplicacao);
