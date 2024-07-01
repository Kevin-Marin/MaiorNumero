//Pergunte para o usuário um número, e retorne o maior número possível que pode ser feito com os algarismos por ele fornecido.
//Use o prompt para interagir com o usuário.

const prompt = require('prompt-sync')();
let numeros = []

console.log("Te direi qual o maior número possível com seus números...")

let numUser = prompt("Escolha um número: ");
numUser = numUser.split("");

for (let i = 0; i < numUser.length; i++) {
    for (let j = i + 1; j < numUser.length; j++) {
        if (numUser[j] > numUser[i]) {
            let aux = numUser[i];
            numUser[i] = numUser[j];
            numUser[j] = aux;
        }
    }
}

let maiorNumero = numUser.join("");
numeros.push(maiorNumero);

console.log("O maior número possível é: " + maiorNumero);
