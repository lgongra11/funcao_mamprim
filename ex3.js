function operar(a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}

function somar(x, y) {
    return x + y
}

function multiplicar(x, y) {
    return x * y
}

console.log(`Soma: ${operar(10, 4, somar)}`);
console.log(`Multiplicação: ${operar(2,4, multiplicar)}`);