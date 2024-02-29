const veiculos = {
    marca: '',
    modelo: '',
    placa: '',
    cor: '',
    ano: 0,
    tipoDeCombustivel: '',
    quantidade: 0,
    setQuantidade: function(novaQuantidade) {
        if ( this.quantidade != 0) {
            if (novaQuantidade > 0) {
                this.quantidade += novaQuantidade
            } else {
                if ( this.quantidade < Math.abs(novaQuantidade)) {
                    console.log(`Você tem ${ this.quantidade } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                } else {
                    console.log(novaQuantidade)
                    this.quantidade += novaQuantidade
                }
            }
        } else {
            if ( novaQuantidade > 0 ) {
                this.quantidade += novaQuantidade
             } else {
                console.log(`Você tem ${ this.quantidade } impossivel retirar ${ Math.abs(novaQuantidade) }`)
            }
        }
    }
}


// veiculos.marca = 'Fiat'
//veiculos.modelo = 'ELX'
//veiculos.placa = '567-KJH'
//veiculos.cor = 'PRETO'
//veiculos.ano = '2006'
//veiculos.tipoDeCombustivel = 'GASOLINA'
//veiculos.quantidade = -3
//veiculos.setQuantidade = 2
//console.log(veiculos)


const veiculosUsados = {
    quantidadeDeDonos: 'Donos',
    kmRodados: 'todos',
    preco: 0,
    statusDeVenda: false,
    estadoDeConservacao: 'bom',
    vendaDoVeiculo: function(quantidade) {
        
        if (this.setQuantidade(quantidade) === true) {
            this.statusDeVenda = true
        }
    }
}

Object.setPrototypeOf(veiculosUsados, veiculos)


veiculosUsados.nome = 'Palio'
veiculosUsados.marca = 'Fiat'
veiculosUsados.modelo = 'ELX'
veiculosUsados.placa = 'UHV-6532'
veiculosUsados.cor = 'vermelha'
veiculosUsados.ano = 2005
veiculosUsados.tipoDeCombustivel = 'Flex'
veiculosUsados.quantidade = 2


console.log(veiculosUsados)

veiculosUsados.vendaDoVeiculo(-1)

console.log(`O veiculo de marca ${ veiculosUsados.marca } e modelo ${ veiculosUsados.modelo }. Tem a placa ${ veiculosUsados.placa } e a cor ${ veiculosUsados.cor }. Seu tipo de combustivel é ${ veiculosUsados.tipoDeCombustivel } e temos ${ veiculosUsados.quantidade } unidades em nossa loja.`)


console.log(veiculosUsados.statusDeVenda)