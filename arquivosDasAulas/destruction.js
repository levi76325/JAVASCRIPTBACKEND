// destruction - é uma expressão que possibilita a extração de dados dinamicamente de arrays e/ou objects em variaveis.

const pessoa = {
    nome: 'milan',
    sobrenome: 'beu',
    idade: 22,
}

// forma tradicional de atribiçao e impressão
console.log(pessoa.sobrenome)
const sobrenomeDoElvis = pessoa.sobrenome
console.log(sobrenomeDoElvis)

// forde desconstruida

let { idade, nome, sobrenome } = pessoa
console.log(sobrenome) 
console.log(nome) 
console.log(idade)
let { nome:nomeDoElvis } = pessoa
console.log(nomeDoElvis)


let nomes = ['alicie', 'mikael', 'francisco', 'felipe']
// forma convencional de utilizar um array
console.log(nomes[2])
let nomeFrancisco = nomes[2]
console.log(nomeFrancisco)
// descontrução de arrays
let [ nomeAlice ] = nomes
console.log(nomeAlice)