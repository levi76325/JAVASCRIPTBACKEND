const Bebidas = {
    quantidade: function(quantidade) {
        if (quantidade < 0) {
            quantidade = 0
        }
    },
    medida: '',
    dataDeValidade: '',
}
///Bebidas.sabor = 'Cola'
//Bebidas.quantidade = '2'
//Bebidas.medida = '2L'
//Bebidas.dataDeValidade = '22/05/1967'
//console.log(Bebidas)

const cocaCola = {
    nomeBebida: '',
    sabor: '',
    preco: '',

}

Object.setPrototypeOf(Bebidas, cocaCola)

cocaCola.nomeBebida = 'Cola-Cola'
cocaCola.sabor = 'Cola'
cocaCola.preco = '10.00'
cocaCola.quantidade = '2'
cocaCola.dataDeValidade = '2024.09.12'
cocaCola.medida = '2L'
console.log(cocaCola)

const Fanta = {
    nomeBebida: '',
    sabor: '',
    preco: '',

}

Object.setPrototypeOf(Bebidas, cocaCola, Fanta)

Fanta.nomeBebida = 'Fanta Laranja'
Fanta.sabor = 'Laranja'
Fanta.preco = '8.50'
Fanta.quantidade = '5'
Fanta.dataDeValidade = '2026.1.22'
Fanta.medida = '1L5'
console.log(Fanta)