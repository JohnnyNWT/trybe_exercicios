// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessa informação, crie um algoritmo que retorne o fatorial de 10.
let fatorial = 1
for (i = 4; i > 0; i--) {
    fatorial *= i
}
console.log(fatorial)

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let inverter = ''
for (i = word.length - 1; i >= 0; i--) {
    inverter += word[i]
}
console.log(inverter)

// 3- Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0]
let menorPalavra = array[0]

for (i = 1; i < array.length; i++) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i]
    }
}
console.log(maiorPalavra)

for (i = 1; i < array.length; i++) {
    if (array[i].length < maiorPalavra.length) {
        menorPalavra = array[i]
    }
}
console.log(menorPalavra)

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNumPrimo = 0;

for (let contador = 2; contador <= 50; contador++) {
  let numPrimo = true;
  for (let divisor = 2; divisor < contador; divisor++) {
    if (contador % divisor === 0) {
      numPrimo = false;
    }
  }
  if (numPrimo === true) {
    maiorNumPrimo = contador;
  }
}
console.log(maiorNumPrimo);
