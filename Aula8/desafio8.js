function Cmedia() {

    let soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    let media = soma/notas.length;

    return media;
}

const notas = [4.5, 6.3, 10, 5];

let media = Cmedia(notas);

console.log("a média de notas é: "+media);