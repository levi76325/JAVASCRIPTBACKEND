import { LavaJato } from './CleanDrive.js'
import { Motos } from './Motos.js'
import { Carros } from './Carros.js'

let cliente = new LavaJato('Paulo', 'Junior', '3 horas.' , 'Estará Pronto as 5:30', 'Prazo ate as 6 Horas')
let moto = new Motos('Entregue no Prazo Certo!', 'Titã 150', 'Vermelha', 'Paulo', 'Junior', '3 Horas', '5:30')
let cliente2 = new LavaJato('José', 'Roberto', '1:46' , 'Estará Pronto as 5:23', 'Prazo ate as 7 Horas')
let Carro = new Carros('Entregue no Prazo Certo!', 'Palio 2013', 'Vermelho', 'José', 'Roberto', '1:46', '5:23')

console.log(cliente)
console.log(moto)
console.log(cliente2)
console.log(Carro)

console.log(`Olá, meu nome é ${ cliente.getNome }, e meu sobrenome é ${ cliente.getSobrenome }, vim deixar minha moto, agora são ${cliente.horarioDeEntrada}, que horas posso vim buscar?, ${cliente.horarioDeSaida}, ${cliente.prazo} `)
console.log(`A moto de ${cliente.getNome} ${cliente.getSobrenome} Ficou Pronta no Prazo Certo!`)
console.log('=====================================================================================================================================================================')
console.log(`Olá, meu nome é ${ cliente2.getNome }, e meu sobrenome é ${ cliente2.getSobrenome }, vim deixar minha moto, agora são ${cliente2.horarioDeEntrada}, que horas posso vim buscar?, ${cliente2.horarioDeSaida}, ${cliente2.prazo} `)
console.log(`O Carro de ${cliente2.getNome} ${cliente2.getSobrenome} Ficou Pronto no Prazo Certo!`)
