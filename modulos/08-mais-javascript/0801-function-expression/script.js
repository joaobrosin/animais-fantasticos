/**
 * remova o erro
 */
// console.log(priceNumber('R$ 99,99'));
// const priceNumber = n => +n.replace('R$', '').replace(',','.');

// resposta:
const priceNumber = n => +n.replace('R$', '').replace(',','.');
console.log(priceNumber('R$ 99,99'));

/**
 * cri uma IIFE e isole o escopo
 * de qualquer código JS
 */

// resposta:
(function() {
  const nome = 'João';
  console.log(nome);
})();

/**
 * Como podemos utilizar
 * a função abaixo?
 */
// const active = callback => callback();

// resposta:
const active = callback => callback();

active(function() {
  console.log('Teste de Active');
});
