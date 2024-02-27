import { Veiculos } from "./Veiculos.js";
import { VeiculosNovos } from "./VeiculosNovos.js"

let palio = new Veiculos('Fiat', 'ELX', '345-dfg', 'Preto', '2004', 'Flex', 0)

console.log(palio.getMarca)
console.log(palio.anoDeFabricacao)
console.log('==============================')
console.log(palio.quantidade)
palio.setQuantidade = -3
console.log(palio.quantidade)
palio.setQuantidade = 2
console.log(palio.quantidade)
palio.setQuantidade = 5
console.log(palio.quantidade)
palio.setQuantidade = -6
console.log(palio.quantidade)
palio.setQuantidade = -4
console.log(palio.quantidade)


let civic = new VeiculosNovos('Honda', 'Touring', null, 'branco', 2025, 'Flex', 10,'265000.00', 'patio')
console.table(civic)

console.log('==============')
civic.setStatusDeVenda = true
civic.setQuantidade = 3
civic.taxaDeEmplacamento = 3000.00
civic.setEmplacado = true
civic.placa = ['JHG-878', 'DFG-656']
console.table(civic)