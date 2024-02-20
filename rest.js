// rest - e uma sintexe que permite representar um numero de argumentos indefinidos em um array.

const cadastrar = (usuarios, ...novosUsuarios) => {
    let totalDeUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ]
    return console.log(totalDeUsuarios)
}

let usuarios = ['joao', 'pedro', 'levi']

let novosUsuarios = cadastrar(usuarios, 'sedex', 'maria', 'artu')
novosUsuarios = cadastrar(usuarios, 'sedex', 'joao', 'maria', 'anderson', 'pedro')


let numeros = (...meusNumeros) => {
    console.log(meusNumeros.length)
}

let novosNumeros = numeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19)