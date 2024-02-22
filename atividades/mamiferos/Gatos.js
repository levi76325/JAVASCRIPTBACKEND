import { Mamifero } from "./Mamifero.js"

export class Gatos extends Mamifero {
    constructor(nome, raca, patas) {
        super(patas)
        this.nome = nome
        this.raca = raca
        this.mia = 'MIIIIIIIAAAAAAAAUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU'
    }

    get obterNome(){
        return this.nome
    }

    get obterRaca() {
        return this.raca
    }
    set mudarNome(novoNome) {
        this.nome = novoNome
    }

    set mudarRaca(novaRaca) {
        this.raca = novaRaca
    }
}