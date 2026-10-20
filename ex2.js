function calcularDobro(num) {
    return num*2
}

function imprimirFormatado(valor, callbackResultado) {
    callbackResultado
    console.log(`[RESULTADO]: O valor calculado é ${valor}`)
}

imprimirFormatado(calcularDobro(25))