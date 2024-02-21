const prompt = require('prompt-sync')()
// faça um algarismo que calcule o fatorial de um numero

let numero = Number(prompt('Digite o numero que queira fatoriar: '))
let resultado = 1
for (let i=1; i<=numero; i++) {
    resultado *= i
}

console.log(`O fatorial de ${numero} e ${resultado}`)
