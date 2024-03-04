const clientes = {
    nome: 'Nome do Cliente',
}

const pedidos = {
    pedido: 'Pedido Do Cliente',
    quantidade: 0,
}

const Valor = {
    valorDaCompra: 'Valor Da Compra.',
}

Object.setPrototypeOf(clientes, pedidos, Valor)

clientes.nome = 'Paulo Junior'
clientes.pedido = 'Churrasco De Carne'
clientes.quantidade = '2 Unidades por Gentileza.'
clientes.valorDaCompra = 'Sua Compra deu 7 reias Senhor Paulo.'
console.log(clientes)