// Estruturas Globais - Objects, Stirngs, Numberns, Arrays e as Functions
const animal =  new Array('gato', 'cachorro', 'rato')
console.log(animal)
console.log(animal.filter(function(animal) {return animal === 'rato'}))

const animais = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function() {
        console.log(this.som)
    }
}

animais.emitirSom()

const gato = {
    tipo: 'gato'
}

Object.setPrototypeOf(gato, animais)

gato.emitirSom


const gatoRaivoso = {
    tipo: 'Gato Raivoso',
    miarForte: function() {
        console.log(this.som.toUpperCase)
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()