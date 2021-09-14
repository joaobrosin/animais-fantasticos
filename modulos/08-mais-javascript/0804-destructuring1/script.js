/**
 * desestruturando objeto simples
 */
// const carro = {
//   marca: 'Fiat',
//   ano: 2018,
//   portas: 4
// }

// const { marca, ano } = carro;

// console.log(marca); // Fiat
// console.log(ano); // 2018

/**
 * desestruturando objeto com mais profundidade
 */
// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicos: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// console.log(cliente.compras.digitais.livros); // ['Livro 1', 'Livro 2']
// console.log(cliente.compras.digitais.videos); // ['Video JS', 'Video HTML']

// const { livros, videos } = cliente.compras.digitais;

// console.log(livros); // ['Livro 1', 'Livro 2']
// console.log(videos); // ['Video JS', 'Video HTML']

/**
 * nesting - aninhando uma desestruturação dentro de outra
 */
// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicos: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// const { fisicos, digitais, digitais: {livros, videos}} = cliente.compras;

// console.log(digitais);
// console.log(livros);
// console.log(videos);

/**
 * Mudando o nome da variável na desestruturação
 */
// const cliente = {
//   nome: 'João',
//   compras: 10
// }

// const { nome: nomeCliente, compras: comprasCliente } = cliente;

// // console.log(nome); // vai dar erro (não existe)
// console.log(nomeCliente); // João

/**
 * Dando valor default para variável, caso ela não exista
 * caso a variável exista, não será colocado esse valor default
 */
// const cliente = {
//   nome: 'João',
//   compras: 10,
// }

// const { nome, email = 'email não definido' } = cliente;
// console.log(nome); // João
// console.log(email); // email não definido 

/**
 * desestruturando arrays
 */
// const frutas = ['Banana', 'Uva', 'Morango'];

// // capturando da forma padrão
// const primeiraFruta = frutas[0];
// const segundaFruta = frutas[1];
// const terceiraFruta = frutas[2];
// console.log(primeiraFruta, segundaFruta, terceiraFruta) // Banana Uva Morango

// // capturando com destructuring
// const [ primeira, segunda, terceira ] = frutas;
// console.log(primeira, segunda, terceira); // Banana Uva Morango

/**
 * declarando várias variáveis ao mesmo tempo
 */
// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3'];
// console.log(primeiro, segundo, terceiro);

/**
 * Desestruturação de argumento
 *  se uma função espera receber como argumento um objeto,
 * podemos desestruturar ele no momento da declaração
 */
function handleKeyBoard1 (event) {
  console.log(event.key, event.keyCode);
}

// com destructuring
function handleKeyBoard2 ({key, keyCode}) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyBoard1);
document.addEventListener('keyup', handleKeyBoard2);



