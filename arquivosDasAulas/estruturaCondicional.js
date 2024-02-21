const prompt = require('prompt-sync')()

let idade = Number(prompt('Iforme sua idade: '))


if (idade < 12 && idade >= 0) {
    console.log('Voce é uma criança')
} else if (idade < 18 && idade >= 12) {
    console.log('vc é um adolecente')
} else if (idade >= 18 && idade < 60) {
    console.log('vc é um adulto')}
    else if (idade >= 60 && idade < 150) {
        console.log('vc é um idoso')}