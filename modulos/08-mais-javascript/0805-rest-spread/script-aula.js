/**
 * Pode-se colocar valores padrões dentro
 * do argumento da função
 */
function perimetroForma (lado, totalLados = 4) {
  return lado * totalLados;
}

console.log(perimetroForma(10, 4)); // 40
console.log(perimetroForma(10, 2)); // 20
console.log(perimetroForma(10)); // 40

/**
 * A palavra chave arguments é um objeto Array-like criado 
 * dentro da função. Esse objeto contém os
 * valores dos argumentos
 */
function perimetroForma2 (lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  console.log(argArray);
  return lado * totalLados;
}

perimetroForma2(10, 4, 20); // [10, 4, 20]

/**
 * Paramêtro rest
 * É possível declararmos um parâmetro utilizando "..."
 * na frente do mesmo. Assim todos os argumentos que
 * passarmos na ativação da função ficarão
 * dentro do parâmetro
 */
function anunciarParticipantes (...participantes) {
  participantes.forEach(participante => {
    console.log(participante, 'participou');
  });
}

anunciarParticipantes('Pedro', 'Marta', 'Maria', 'João');

/**
 * Operador Spread
 * Assim como o rest, o operador Spread 
 * também utiliza os "..." para ser ativado.
 * O spread irá distribuir um item iterável, um por um.
 */
const frutas = ['Banana' , 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];
console.log(comidas) // ['Banana', 'Uva', 'Morango', 'Pizza', 'Cenoura', 'Batata']

/**
 * Spread Argument
 * O Spread pode ser muito útil para funções
 * que recebem uma lista de argumentos
 * ao invés de uma array
 */
const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const maiorNumeroSpread = Math.max(...listaNumeros);

console.log(maiorNumeroSpread); // 55

/**
 * Transformar em array
 * É possível transformar itens iteráveis em uma array real com o spread
 */
const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
console.log(btns); // NodeList(2) [button, button]
console.log(btnsArray); // (2) [button, button]

const frase = 'Teste';
const fraseArray = [...frase];
console.log(fraseArray); // ['T', 'e', 's', 't', 'e']
