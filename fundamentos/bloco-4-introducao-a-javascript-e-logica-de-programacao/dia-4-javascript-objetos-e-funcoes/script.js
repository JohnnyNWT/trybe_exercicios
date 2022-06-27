// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
  info['recorrente'] = 'Sim' // info.recorrente = 'Sim'
  console.log(info);

//Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: 
    [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
// 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)

// 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
)

// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
// Duas formas de se resolver
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');

// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function arrayInt (array) {
    let contNum = 0
    let contNumRepetido = 0
    let numRepetido = 0
    for (let indexArr = 0; indexArr < array.length; indexArr++) {
        let verificaNum = array[indexArr]
        for (let index = 0; index < array.length; index++) {
            if (verificaNum === array[index]) {
                contNum++
            }
        }
        if (contNum > contNumRepetido) {
            contNumRepetido = contNum
            numRepetido = indexArr
        }
        contNum = 0
    }
    return array[numRepetido]
}
console.log(arrayInt([2, 3, 2, 5, 8, 2, 3]));