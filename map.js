// map - e um metodo que tem uma funçao interna que intera com cada elemento de um array ou objeto.

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tabuadaDoSeis = listaDeNumeros.map((item) => {
     return item * 6
})
console.log(tabuadaDoSeis)

const tabuadaDoSete = listaDeNumeros.map((item) => {
    return item * 7
})
console.log(tabuadaDoSete)


const encontraNumero = listaDeNumeros.find((item) => {
    return item === 7
})
console.log(encontraNumero)

const somaArray = listaDeNumeros.reduce((total, proximoValor) => {
    return total + proximoValor
})
console.log(somaArray)