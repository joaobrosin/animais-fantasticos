/**
 * for of 
 * loop para objetos iteráveis
 */

// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'JavaScript';

// for(const fruta of frutas) {
//   console.log(fruta)
// }

// for(const letra of frase) {
//   console.log(letra)
// }

// const buttons = document.querySelectorAll('button');

// for(const btn of buttons) {
//   btn.style.color = 'blue';
// }

// console.log(...buttons)

/**
 * quando for of é usado em objetos não iteráveis
 * ocorre um erro:
 */

// const carro = {
//   marca: 'Honda',
//   ano: 2018
// }

// for(const chave of carro) {
//   console.log(chave);
// } // erro

/**
 * Então podemos utilizar "FOR...IN"
 * Este loop irá retornar a chave (key) de todas
 * as propriedades enumeráveis (que não sejam símbolos)
 * de um objeto
 */
// const onibus = {
//   marca: 'Mercedes',
//   ano: 2020
// }

// Object.defineProperties(onibus, {
//   rodas: {
//     value: 4,
//     enumerable: true,
//   },
//   portas: {
//     value: 4,
//     enumerable: false,
//   }
// })

/**
 * for in não vai puxar todas propriedades do objeto
 * apenas as propriedades com enumerable 'true'
 */
// for (const key in onibus) {
//   console.log(key, onibus[key])
// } 
// marca Mercedes
// ano 2020

/**
 * forma de capturar todos os computed styles de 
 * um elemento, com sua chave e valor:
 */
// const btnUnico = document.querySelector('button');
// const btnStyles = getComputedStyle(btnUnico);

// for (const style in btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`);
// }

/**
 * Do / While 
 * Outro tipo de loop é o Do / While. Não é muito utilizado
 */
// let i = 0;
// do {
//   console.log(i++)
// } while (i <= 5);
