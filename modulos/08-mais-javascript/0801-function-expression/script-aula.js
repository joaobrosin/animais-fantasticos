/**
 * function declaration
 * a chamada da função pode ser antes
 * ou depois da função
 */
console.log(somar(1,0));
function somar(a,b) {
  return a + b;
}

/**
 * function expression
 * a chamada precisa 
 * vir depois da declaração da variável
 * caso contrário dara erro
 */
const somar2 = function(a,b) {
  return a + b;
}
console.log(somar2(1,1));

/**
 * a função pode ser reduzida com
 * arrow function
 */
const somar3 = (a,b) => a + b;
console.log(somar3(1,2))

/**
 * e ainda mais reduzida 
 * quando houver apenas 1 parâmetro
 */
const quadrado = a => a * a;
console.log(quadrado(2))

/**
 * const dentro da função
 * se restringe ao escopo da função
 */
const instrumento = 'Violão';

function initCodigo () {
  const instrumento = 'Guitarra';
  console.log(instrumento); // Guitarra - está no escopo da função
}

console.log(instrumento); // Violão - está fora do escopo da função
initCodigo();

/**
 * IIFE - Immediately Invoked Function Expression
 * maneira muito utilizada antigamente para isolar escopos
 */
const instrumento2 = 'Violão';

(function () {
  const instrumento2 = 'Guitarra';
  console.log(instrumento2);
})()

console.log(instrumento2);

/**
 * IIFE - Immediately Invoked Function Expression
 * pode ser usada com arrow function tbm
 */
const instrumento3 = 'Violão';

(() => {
  const instrumento3 = 'Guitarra';
  console.log(instrumento3);
})()

console.log(instrumento3);
