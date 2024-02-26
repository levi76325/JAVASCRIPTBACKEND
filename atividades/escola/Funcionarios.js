 export class Funcionarios {
    #Salario 
    constructor(nome, cargo, salario, turno) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
        this.turno = turno
    }
    get obterNome() {
        return this.nome
    }
    get obterCargo() {
        return this.cargo
    }
    get obterSalario() {
        return this.salario
    }
    get obterTurno() {
        return this.turno
    }
    set alteraNome(novoNome) {
        this.nome = novoNome
    }
    set alterarCargo(novoCargo) {
        this.cargo = novoCargo
    }
    set alterarSalario(novoSalario) {
    if (this.salario < novoSalario) {
        this.salario = novoSalario 
    } else {
        return `Novo salario não pode ser menor que ${ this.salario }` 
    }
    }


    set alterarTurno(novoTurno) {
        if (this.turno === novoTurno) {
            return `Seu turno ja é ${ this.turno }`
        } else {
        this.turno = novoTurno
        }
    }
}