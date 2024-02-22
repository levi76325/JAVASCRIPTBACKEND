export class Mamifero {
    constructor(patas) {
        this.patas = patas
    }

    get obterPatas() {
        return this.patas
    }
    set mudarPatas(novasPatas) {
        this.patas = novasPatas
    }
}