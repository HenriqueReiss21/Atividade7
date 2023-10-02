function somar(a,b){
    const result = a+b
    return result
}

function subtrair(a,b){
    const result = a-b
    return result
}

function dividir(a,b){
    const result = a/b
    return result
}

function multiplicar(a,b){
    const result = a*b
    return result
}

function calcular(a,b,operacao){
    return operacao(a,b)
}

console.log(calcular(5,6,somar))
console.log(calcular(5,6,subtrair))
console.log(calcular(5,6,dividir))
console.log(calcular(5,6,multiplicar))