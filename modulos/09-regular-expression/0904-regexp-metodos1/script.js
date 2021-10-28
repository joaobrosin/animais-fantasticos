// const regexp = /\w+/gi;
// const regexp2 = new RegExp('\\w+', 'gi');

// const frase = 'JavaScript Linguagem 101';

// console.log(frase.replace(regexp, 'X')) // X X X
// console.log(frase.replace(regexp2, 'X')) // X X X

// /**
//  * Propriedades
//  * uma regexp possui propriedades com informações
//  * sobre as flags e o conteúdo da mesma.
//  */
// const regexp3 = /\w+/gi;

// console.log(regexp3.flags); //gi
// console.log(regexp3.global); // true
// console.log(regexp3.ignoreCase); // true
// console.log(regexp3.multiline); // false
// console.log(regexp3.source); // \w+

/**
 * regexp.test()
 * O método test() verifica se existe ou não uma ocorrencia
 * da busca. Se existir ele retorna true. 
 * A próxima vez que chamarmos o mesmo, ele irá começar
 * do index em que parou no último true
 */

const regexp4 = /Java/g;
const frase4 = 'JavaScript e Java';

// console.log(regexp4.lastIndex); // 0
// console.log(regexp4.test(frase4)); // true
// console.log(regexp4.lastIndex); // 4
// console.log(regexp4.test(frase4)); // true
// console.log(regexp4.lastIndex); // 17
// console.log(regexp4.test(frase4)); // false
// console.log(regexp4.lastIndex); // 0
// console.log(regexp4.test(frase4)); // true

// let i = 1;
// while(regexp4.test(frase4)) {
//   console.log(i++, regexp4.lastIndex);
// }

/**
 * regexp.exec()
 * O exec() diferente do test(), irá retornar um Array
 * com mais informações do que apenas um valor booleano.
 */
const regexp5 = /\w+/g;
const frase5 = 'JavaScript, TypeScript, CoffeeScript, Java';

// console.log(regexp5.exec(frase5));
// console.log(regexp5.exec(frase5));
// console.log(regexp5.exec(frase5));
// console.log(regexp5.exec(frase5));
// console.log(regexp5.exec(frase5));
// console.log(regexp5.exec(frase5));

let regexpResult;

while((regexpResult = regexp5.exec(frase5)) !== null) {
  console.log(regexpResult)
}
