/*
function soma(x, y) {
    return x + y
}
console.log(soma(5,7))
console.log(soma(2,9))
console.log(soma(12,2))
console.log(soma(43,6))
console.log(soma(15,2))
console.log(soma(67,5))

function deMaior(idade) {
    if (idade === 18) {
        console.log('voce tem exatamente 18 anos ')
    } else if (idade > 18) {
        console.log('voce tem mais de 18 anos')
    } else if (idade < 18) {
        console.log('voce tem menos de 18')
    } else
        console.log('tem q ser um numero, burro')
}

const prompt = require('prompt-sync')()
let idade = Number(prompt('Informe sua idade: '))
console.log(deMaior(idade))
// função anonima, dentro de um array.
const minhaFuncao = function () {return a - b }
// função anonima, dentro de um ibjeto
const meuOjeto = {}
meuOjeto.saudacao = function() {return 'Òla pessoal'}
console.log(meuOjeto.saudacao())
// funçaõ anonima, funcao como argumento de uma função
function qualquerCoisa(funcao) {
    funcao()
}
qualquerCoisa(function() {console.log('Execultando uma fencao interna...')})

function calculaImposto(funcao, valor) {
    funcao(valor)
}

calculaImposto(
    function(funcao, valor) {
        let imposto = valor * 0.05
        console.log(imposto)   
     }, 2500
)

*/

function multiplicar() {
    let multiplicar = 1
    for (i in arguments) {
        multiplicar *= arguments[i]
    }
    return {multiplicar, arguments}
}
console.log(multiplicar())