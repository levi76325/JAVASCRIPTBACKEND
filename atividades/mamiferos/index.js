// execuções / chamadas
import { Cachorro } from './Cachorro.js'
import { Gatos } from './Gatos.js'

let bob = new Cachorro('Bob', 'Pug', 4)
let melMaia = new Gatos('Mel Maia', 'Vira lata', 4)

console.log(bob)
console.log(`Ola eu sou o cãozinho ${bob.obterNome}`)
console.log(`Ola eu sou o cãozinho ${bob.obterNome} e tenho ${bob.obterPatas} patas!`)


function tipoMamifero(valor) {
    if (valor==='MIIIIIIIAAAAAAAAUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU') {
        console.log('Voce é dona(o) de um(a) gato(a).') 
    } else if (valor==='aaaaaaaaaaaaaaaaaaaaauuuuuuuuuuuuuuuuuuu') {
        console.log('Voce é dona(o) de um(a) cachorro(a).')
    } else {
        console.log('nao a nada que possamos fazer.')
    }
}