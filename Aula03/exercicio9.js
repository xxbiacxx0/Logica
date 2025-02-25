const prompt = require('prompt-sync')();
let valor_a = (Number(prompt("Digite o valor da base maior")));
let valor_b = (Number(prompt("Digite o valor da base menor")));
let valor_c = (Number(prompt("Digite o valor da altura")));
let soma = (valor_a + valor_b) * valor_c;
let divisao = (soma / 2);
console.log(divisao);