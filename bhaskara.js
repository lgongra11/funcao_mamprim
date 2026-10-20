function dividir (y,a) {
    return y / (2*a)
}

function bhaskara (a,b,c, callbackDividir, callbackDividir2) {
    const x = b*(-1) + Math.sqrt(b**2 - 4*a*c)
    const x2 = b*(-1) - Math.sqrt(b**2 - 4*a*c)
    console.log(callbackDividir2(x2,2))
    return callbackDividir(x,2)
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
console.log(bhaskara(1,-6,8, dividir, dividir));