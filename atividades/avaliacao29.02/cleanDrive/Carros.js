import { LavaJato } from "./CleanDrive.js"

export class Carros extends LavaJato {
    constructor(prazo, modelo, cor, nome, sobrenome, horarioDeEntrada, prazoDeSaida) {
        super(nome, sobrenome, horarioDeEntrada, prazoDeSaida, prazo)
        this.modelo = modelo
        this.cor = cor
    }
    get getModelo() {
        return this.modelo
    }
    get getCor() {
        return this.cor
    }
    set setModelo(Modelo) {
        this.modelo = Modelo
    }
    set setCor(Cor) {
        this.cor = Cor
    }
}