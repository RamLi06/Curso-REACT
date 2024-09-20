/* OBJETO PESSOA

function pessoa(nome, idade, profissão){

    this.nome = nome
    this.idade = idade
    this.profissão = profissão

    

};

const Joao = new pessoa("Joao",'56', "garoto de programa")
console.log(`sou ${Joao.nome} tenho ${Joao.idade} anos e sou ${Joao.profissão}`);

*/

/*
function carro(marca, ano, modelo){

    this.marca = marca
    this.ano = ano
    this.modelo = modelo

};

const astra = new carro('chevrolet', '1993', 'astra')

astra.cor = "vermelho"

astra.ano = '2002'

console.log(`marca: ${astra.marca} | modelo: ${astra.modelo} | ano: ${astra.ano}`);
console.log("cor:", astra.cor);

*/

/*
const Calculadora = { a: 3, b: 4, c: 3 ,

soma: function() {
    console.log(this.a + this.b + this.c)
}

};

Calculadora.soma();

*/

/*
function retangulo(altura, largura) {

    this.altura = altura
    this.largura = largura

    calcularea = function() {

        console.log(altura * largura);

    };

};

const retanguloFoda = new retangulo(5, 3);



calcularea(retanguloFoda);

*/

function conta_bancaria(titular, saldo) {

    this.titular = titular
    this.saldo = saldo

};

const conta_nova = new conta_bancaria("joao", `R$ ${500.00}`)

const conta_nova2 = new conta_bancaria('Marcello', `R$ ${15000.00}`)

depositar = function () {

    console.log(conta_nova.saldo + 500)
};

const deposito =


    console.log(conta_nova);
console.log(conta_nova2);