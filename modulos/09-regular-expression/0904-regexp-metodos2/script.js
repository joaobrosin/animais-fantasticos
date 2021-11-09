/**
 * str.match()
 * O match() é um método de strings que pode receber como
 * argumento uma Regexp. Existe uma diferença de resultado
 * quando utilizamos a flag g ou não
 */
// const regexp = /\w{2,}/g;
// const regexpSemG = /\w{2,}/;
// const frase = 'JavaScript, TypeScript, CoffeeScript e Java';

// console.log(frase.match(regexp));
// console.log(frase.match(regexpSemG));

/**
 * str.split()
 * O split serve para distribuirmos uma string em uma array,
 * quebrando a string no argumento que for passado. Este método irá
 * remover o match da array final.
 */
// const frase2 = 'JavaScript, TypeScript, CoffeeScript';

// console.log(frase2.split(', ')); // (3) []
// console.log(frase2.split(/Script/g)); // (4) []

/**
 * str.replace()
 * O método replace() é o mais interessante por permitir a utilização
 * de funções de callback para cada match que ele der com a Regexp
 */
// const tags = `
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ul>
// `;
// // Modifica todas as tags para div
// console.log(tags.replace(/(?<=<\/?)\w+/g, 'div')); 

// // Adiciona uma classe em todas as tags de abertura
// console.log(tags.replace(/(?<=<)\w+/g, '$& class="lista"'));

/**
 * Grupos de captura
 * É possível definirmos quantos grupos de captura quisermos
 */
// const emails = `
//   empresa@email.com
//   contato@email.com
//   suporte@email.com
// `;

// console.log(emails.replace(/(\w+@)([\w.]+)/g, '$1gmail.com'));
// console.log(emails.replace(/(\w+@)([\w.]+)/g, 'teste@$2'));

/**
 * Callback
 * Para substituições mais complexas, podemos utilizar um callback
 * como segundo argumento do replace. O valor do return será o que
 * irá substituir cada match.
 */
// const regexp2 = /(\w+@)([\w.]+)/g;
// const emails2 = `
//   joao@homail.com.br
//   marta@ggmail.com.br
//   bruna@oulook.com.br
//   andre@origamid.com
// `;

// const emails2Replaced = emails2.replace(regexp2, function(...args) {
//   console.log(args[2]);

//   if(args[2] === 'homail.com.br') {
//     return `${args[1]}hotmail.com`
//   } else if (args[2] === 'ggmail.com.br') {
//     return `${args[1]}gmail.com`
//   } else if (args[2] === 'oulook.com.br') {
//     return `${args[1]}outlook.com`
//   } else {
//     return args[0];
//   }
// })

// console.log(emails2);
// console.log(emails2Replaced);
