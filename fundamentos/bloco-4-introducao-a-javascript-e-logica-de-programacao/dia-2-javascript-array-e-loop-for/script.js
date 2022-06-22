let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (i = 0; i < numbers.length; i++) {
    soma += numbers[i]
}
console.log(soma);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let sum = 0;
for (i = 0; i < numbers.length; i++) {
    sum += numbers[i]  
} let resultado = sum / numbers.length
console.log(resultado)

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let sum = 0;
for (i = 0; i < numbers.length; i++) {
    sum += numbers[i]  
}
let resultado = sum / numbers.length
if (resultado > 20) {
    console.log("Valor maior que 20.")
} else {
    console.log("Valor menor ou igual a 20.");
}
console.log(resultado)

// 5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0]
for (i = 1; i < numbers.length; i++) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i]
    }
}
console.log(maiorNumero);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.