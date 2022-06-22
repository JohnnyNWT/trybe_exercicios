const a = 10
const b = 5
function adicao (a, b){
    return a + b
}

function subtracao (a, b){
    return a - b;
}

function multiplicacao (a, b){
    return a * b;
}

function divisao (a, b){
    return a / b;
}

function modulo (a, b){
    return a % b;
}
console.log(adicao(a,b))
console.log(subtracao(a,b))
console.log(multiplicacao(a,b))
console.log(divisao(a,b))
console.log(modulo(a,b))


const num1 = 1000
const num2 = 100
const num3 = 14

function retornaNumeroMaior2 (num1, num2){
    if (num1 > num2){
        return num1
    } else {
        return num2
    }
}
console.log(retornaNumeroMaior2(num1, num2))

function retornaNumeroMaior3 (num1, num2, num3){
    if (num1 > num2){
        return num1
    } else if (num2 > num3){
        return num2
    } else {
        return num3
    }
}
console.log(retornaNumeroMaior3(num1, num2, num3))

const angulo1 = 45
const angulo2 = 90
const angulo3 = 45

function anguloTriangulo (angulo1, angulo2, angulo3){
    let soma = angulo1 + angulo2 + angulo3
    if (soma === 180) {
        return true
    } else if (soma < 0) {
        return 'Ângulo inválido!'
    } else {
        return false
    }
}
console.log(anguloTriangulo(angulo1, angulo2, angulo3))
/**TESTANDO BRANCH */
