class Conta {
    constructor(nome, conta, cpf){
        this.nome = nome
        this.conta = conta
        this._saldo = 0
        this._cpf = cpf
    } 

    get mostraNome() {
        return this.nome
    }

    get cpf(){
        return this._cpf
    }
    
    get saldo() {
        return this._saldo
    }
    depositar(valor) {
        if (valor <= 0) {
            return
        } else {
            this._saldo += valor
        }
    }
    sacar(valor) {
        if (this._saldo >= valor) 
            this._saldo -= valor
            return valor
    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}


let conta1 = new Conta('levi', 12345, 6453456353)
let conta2 = new Conta('joao', 67890, 1234567890)
conta1.depositar(1000)
conta2.depositar(500)
conta1.sacar(200)
conta2.sacar(300)
conta1.transferir(200, conta1)
console.log(conta2)
console.log(conta1)