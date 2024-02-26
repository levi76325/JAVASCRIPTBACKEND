import { Funcionarios } from "./Funcionarios.js"

export class Professor {
    constructor(disciplina) {
        this._disciplina = disciplina
    }
    get disciplina() {
        return this._disciplina
    }
    set alterarDisciplina(novaDisciplina) {
        this.disciplina = novaDisciplina
    }
}