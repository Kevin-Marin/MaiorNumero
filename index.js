//Pergunte para o usuário um número, e retorne o maior número possível que pode ser feito com os algarismos por ele fornecido.
//Use o prompt para interagir com o usuário.

const prompt = require('prompt-sync')();
let numeros = []

console.log("Te direi qual o maior número possível com seus números...")


    let numUser = prompt("Escolha um número: ")
    
    numUser = numUser.split("")
    
    for (let i = 0; i < numUser.length; i++) {
        for (let j = 0; j < numUser.length; j++) {
            let aux = numUser[i];
            numUser[i] = numUser[j];
            numUser[j] = aux;

            if (!numeros.includes(numUser.join(""))) {
                numeros.push(numUser.join(""));
                console.log(numUser.join(""));
                
            }
        }
    }
