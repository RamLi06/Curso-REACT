function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado || 1; 
}


let numero = 6;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);
