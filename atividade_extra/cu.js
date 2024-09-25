class conta_bancaria {

    constructor(titular, saldo) {

        this.titular = titular
        this.saldo = saldo
    }

    transferencia(valor, contaDestinada) {

        // Verificar se a conta de origem e destino são iguais

        if (this === contaDestinada) {

            console.log(`Transferência falhou: não é possível transferir para a mesma conta.`);

        } else if (valor <= 0) {

            console.log(`Transferência falhou: o valor de transferência deve ser maior que zero.`);

        } else if (this.saldo >= valor) {

            this.saldo -= valor;
            contaDestinada.saldo += valor;
            console.log(`Transferência de R$ ${valor.toFixed(2)} realizada de ${this.titular} para ${contaDestinada.titular}.`);

        } else {

            console.log(`Transferência falhou: saldo insuficiente na conta de ${this.titular}.`);
        }
    }
}

//contas

const conta1 = new conta_bancaria('Paulo', 500.00)

const conta2 = new conta_bancaria('João', 1000.00)

//tranferencia

conta1.transferencia(10, conta2)

console.log(conta1)

console.log(conta2)

