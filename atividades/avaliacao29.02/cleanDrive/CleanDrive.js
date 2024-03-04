export class LavaJato {
    constructor(nome, sobrenome, horarioDeEntrada, prazoDeSaida, prazo) {
        this.nome = nome 
        this.sobrenome = sobrenome
        this.horarioDeEntrada = horarioDeEntrada
        this.horarioDeSaida = prazoDeSaida
        this.prazo = prazo
    }
    get getNome() {
        return this.nome
    }
    get getSobrenome() {
        return this.sobrenome
    }
    get getHorarioDeEntrada() {
        return this.horarioDeEntrada
    }
    get getHorarioDeSaida() {
        return this.getHorarioDeSaida
    }
    set setNome(novoNome) {
        this.nome = novoNome
    }
    set setSobrenome(novoSobrenome) {
        this.sobrenome = novoSobrenome
    }
    set setHorarioDeEntrada(novoHorarioDeEntrada) {
        this.getHorarioDeEntrada = novoHorarioDeEntrada
    }
    set setHorarioDeSaida(novoHorarioDeSaida) {
        this.horarioDeSaida = novoHorarioDeSaida
    }

}